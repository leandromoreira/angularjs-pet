'use strict';

angular.module('twitter')
  .controller('TheirsCtrl', function($scope, theirTwitterFactory){
    $scope.tweets = theirTwitterFactory.getTheirsTweets();
  });
