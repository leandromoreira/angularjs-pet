'use strict';

angular.module('twitter')
  .factory('theirTwitterFactory', function($http){
    var factory = {};

    $http.get('/data/theirs.json')
      .success(function(data, status, headers, config) {
        factory.tweets = data;
      });

    factory.getTheirsTweets = function(){
      return factory.tweets;
    };
    return factory;
  });
