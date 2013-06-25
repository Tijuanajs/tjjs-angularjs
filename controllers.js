var App = angular.module('App', []);

function HelloController($scope) {
  $scope.greeting = { text: 'Hello' };
}

function CartController($scope) {
	$scope.items = [
		{title: 'Pulparindo', quantity: 8, price: 3.95},
		{title: 'Soda 600 ml', quantity: 17, price: 12.95},
		{title: 'Cacahuates', quantity: 5, price: 6.95}
	];

	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}
}

App.directive('angular', function() {
  return {
    restrict: 'ECMA',
    link: function(scope, element, attrs) {
      var img = document.createElement('img');
      img.src = 'http://goo.gl/ceZGf';
 
 
      // directives as comment
      if (element[0].nodeType === 8) {
        element.replaceWith(img);
      } else {
        element[0].appendChild(img);            
      }
    }
  };
});
