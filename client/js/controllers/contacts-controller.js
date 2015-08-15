function AppCtrl($scope, $http) {

	function refresh() {
		$http.get('/api/contacts')
			.then(function(res){
				$scope.contactlist = res.data;
			}, function(res){});
		$scope.contact = "";
	}

	refresh();

	$scope.addContact = function() {
		$http.post('/api/contacts', $scope.contact)
			.then(function(res) {
				refresh();
			}, function(res){});
	}

	$scope.removeItem = function(id) {
		$http.delete('/api/contacts/' + id)
			.then(function(res){
				refresh();
			}, function(res){});
	}

	$scope.edit = function(contact) {
		$scope.contact = contact;
	}

	$scope.update = function(contact) {
		$http.put('/api/contacts/' + $scope.contact._id, $scope.contact)
			.then(function(res){
				refresh();
			}, function(res){
				console.log(res);
			});
	}
}

