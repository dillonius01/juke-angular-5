/* global juke */
'use strict';

/* DIRECTIVE FOR DOUBLE CLICK */

juke.directive('mySongClick', function($parse) {

	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var fn = $parse(attrs.mySongClick)
			element.on('dblclick', function() {
				fn(scope); // WHAT IS THIS BLACK MAGIC????
			})
		}
	}

})


/* DIRECTIVE FOR SONG COMPONENT */
juke.directive('mySongTable', function(PlayerFactory) {

	return {
		restrict: 'E',
		templateUrl: '/js/song/templates/songs.html',
		scope: {
			collection: '='
		},
		link: function(scope) {


			scope.toggle = function(song) {
			  if (song !== PlayerFactory.getCurrentSong()) {
			    PlayerFactory.start(song, scope.collection);
			  } else if ( PlayerFactory.isPlaying() ) {
			    PlayerFactory.pause();
			  } else {
			    PlayerFactory.resume();
			  }
			};

			scope.getCurrentSong = function () {
			  return PlayerFactory.getCurrentSong();
			};

			scope.isPlaying = function (song) {
			  return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			};


		}
	};

});

