'use strict';

angular.module('twitter')
  .controller('MainCtrl', function($scope){
    $scope.tweets = [
      { message: 'Tweeting about twitter is cool!', time:'few minutes'},
      { message: 'Much more cooler is tweeting about G+', time:'few minutes'},
      { message: 'Forget about, Im gonna back go Facebook', time: 'yesterday'}
    ];

    $scope.postNewTweet = function() {
      if (typeof $scope.newTweet.time === "undefined") {
        $scope.newTweet.time = 'now';
      }
      $scope.tweets.push({
        message: $scope.newTweet.message,
        time: $scope.newTweet.time
      });
      $scope.newTweet = {}
    };
  });
