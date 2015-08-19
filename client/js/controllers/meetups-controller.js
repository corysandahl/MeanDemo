app.controller('meetupsController', ['$scope', '$resource', '$http', function($scope, $resource, $http) {
	var Meetup = $resource('/api/meetups/');
	
	Meetup.query(function(results) {
		$scope.meetups = results;
	});

	$scope.createMeetup = function () {
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function(result) {
			$scope.meetups.push(result);
		});
	}
	
	$scope.removeItem = function (meetup) {
		meetup.$delete(function(result) {
			console.log(result.message.n);
		});
	}
}])