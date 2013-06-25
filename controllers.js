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
