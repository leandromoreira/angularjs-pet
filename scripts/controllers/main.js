'use strict';

angular.module('twitter')
  .controller('MainCtrl', function($scope){
    $scope.tweets = [
      'Tweeting about twitter is cool!',
      'Much more cooler is tweeting about G+',
      'Forget about, Im gonna back go Facebook'
    ];
  });
