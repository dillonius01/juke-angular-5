/* global juke */
'use strict';

juke.directive('myPlayer', ['PlayerFactory', function(PlayerFactory) {

	return {
		restrict: 'E',
		templateUrl: '/js/player/templates/player.html',
		link: function(scope) {

			angular.extend(scope, PlayerFactory);

			scope.toggle = function () {
			  if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
			  else PlayerFactory.resume();
			};

			scope.getPercent = function () {
			  return PlayerFactory.getProgress() * 100;
			};

			scope.handleProgressClick = function (evt) {
			  PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
			};

		}
	};

}]);
