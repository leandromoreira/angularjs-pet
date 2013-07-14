'use strict';

angular.module('twitter')
  .factory('Tweets', function($http){
    return {
      all: function(){
        return $http.get('/data/theirs.json').then(
          function(result){
            return result.data;
          }
        );
      }
    };
  });
