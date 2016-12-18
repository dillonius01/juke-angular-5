/* global juke */
'use strict';

juke.directive('myAlbumList', function() {

	return {
		restrict: 'E',
		templateUrl: '/js/album/templates/my-album-list.html',
		scope: {
			listedAlbums: '='
		}

	};


});
