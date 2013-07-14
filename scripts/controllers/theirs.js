'use strict';

angular.module('twitter')
  .controller('TheirsCtrl', function($scope, Tweets){
    $scope.tweets = Tweets.all();
  });
