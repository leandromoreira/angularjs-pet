'use strict';

angular.module('twitter')
  .factory('theirTwitterFactory', function($http){
    var factory = {};
    var tweets  = [];

    $http.get('/data/theirs.json')
      .success(function(data, status, headers, config) {
        console.log(data);
      });

    factory.getTheirsTweets = function(){
      return tweets;
    };

    return factory;
  });
