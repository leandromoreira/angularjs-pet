'use strict';

describe('MainCtrl', function() {
  var scope;

  beforeEach(module('twitter'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    var ctrl = $controller('MainCtrl', {$scope: scope});
  }));

  it('starts with 3 tweets', function() {
    expect(scope.tweets.length).toBe(3);
  });
});
