'use strict';

angular.module('twitter')
  .controller('TheirsCtrl', function($scope){
    $scope.tweets = [
      { message: 'Another super pic of my cat!', time: 'few seconds'},
      { message: 'Playing on my new xbox one, whos wanna bid my old one', time: 'few seconds'},
      { message: 'Pearl jam blowing my mind with Even Flow', time: 'few minutes'},
      { message: 'AngularJS, EmberJS, KnockoutJS, MymomJs what else...', time: 'few hours'},
      { message: 'LDX #$01 STX $200', time: 'few hours'},
      { message: 'still playing super mario world, why???', time: 'yesterday'},
      { message: 'hls, hds what else...', time: 'few years'}
    ];
  });
