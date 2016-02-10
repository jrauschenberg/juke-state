'use strict';

var juke = angular.module('juke', ['ui.router'])
.config(function ($stateProvider) {
    $stateProvider
    .state('albumList', {
        url: '/albums',
        templateUrl: 'albums.html',
        resolve: {
          albums: function(AlbumFactory) {
            return AlbumFactory.fetchAll();
          }
        },
        controller: 'AlbumsCtrl'
    })
    .state('artistList', {
        url: '/artists',
        templateUrl: 'artists.html',
        resolve: {
          artists: function(ArtistFactory) {
            return ArtistFactory.fetchAll();
          }
        },
        controller: 'ArtistsCtrl'
      })
    .state('singleAlbumList', {
        url: '/albums/:albumID',
        templateUrl: 'album.html',
        resolve: {
          album: function(AlbumFactory, $stateParams) {
            return AlbumFactory.fetchById($stateParams.albumID);
          }
        },
        controller: 'AlbumCtrl'
      })
    .state('singleArtistList', {
        url: '/artist/:artistID',
        templateUrl: 'artist.html',
        resolve: {
          artist: function(ArtistFactory, $stateParams) {
            return ArtistFactory.fetchById($stateParams.artistID);
          }
        },
        controller: 'ArtistCtrl'
      })
    .state('singleArtistList.albums', {
        url: '/albums',
        templateUrl: 'artist.albums.html',
        controller: 'ArtistCtrl'
      })
      .state('singleArtistList.songs', {
        url: '/songs',
        templateUrl: 'artist.songs.html',
        controller: 'ArtistCtrl'
      });

});

