'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    /* it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
	  
	  })); */
	  
	  it('should return Female akan name for Tuesday', inject( function($controller){
	  var scope={},
	  view1Ctrl = $controller('View1Ctrl',{$scope:scope});
	  var result= scope.calc_name('1991/12/31','Female');
	  expect(result).toBe('Abena');
     
	 
}));

it('should return Male akan name for Tuesday', inject( function($controller){
	  var scope={},
	  view1Ctrl = $controller('View1Ctrl',{$scope:scope});
	  var result= scope.calc_name('1991/12/31','Male');
	  expect(result).toBe('Kwabena');

}));

 it('should return Day for date', inject( function($controller){
	  var scope={},
	  view1Ctrl = $controller('View1Ctrl',{$scope:scope});
	  var result= scope.birthDay('1991/12/31');
	  expect(result).toBe('Tuesday');
	}));
	
});
});


















