var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/blog', {
        templateUrl: 'pages/blog.html',
        controller: 'blogController'
    })
});

myApp.controller('mainController', ['$scope', '$resource', function($scope, $resource) {

    $scope.string = function(word) {
      return word.substring(0, 290);
    };

    $scope.pages =
       {
      page1: "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0",
      page2: "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=20",
      page3: "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=40"
      };

    $scope.animeApi = $resource($scope.pages.page1 +  'CLIENT_ID:%20dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd&CLIENT_SECRET:%2054d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151', {}, {}).get(function(response) {
                            return response.data;
                        });

}]);

myApp.controller('blogController', ['$scope', function($scope) {

    $scope.first = "This is my first blog";

}]);
// http://jikan.me/api/anime/1
// https://ghibliapi.herokuapp.com/films
