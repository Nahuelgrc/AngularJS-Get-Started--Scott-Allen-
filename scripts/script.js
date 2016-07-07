var app = angular.module("myApp",[]);
app.controller("HeadController", function($scope){
	$scope.title = "AngularJS: Get Started";
});

app.controller("MainController", function($scope, $sce, $interval, $log){
	$scope.title = "AngularJS: Get Started";
	people = [];

	var addPerson = function(id, firstName, lastName)
	{
		var person = {
			id: id,
			firstName: firstName,
			lastName: lastName,
			imageSrc: $sce.trustAsResourceUrl('.\\pictures\\' + firstName + '.jpg')
		};
		people.push(person);
	};

	var createPeople = function()
	{		
		addPerson(1, "nahuel", "garcia");
		addPerson(2, "jeff", "kiwi");
		addPerson(3, "ben", "belgium");
		addPerson(4, "carolin", "germany");
		addPerson(5, "claire", "scotland");
		addPerson(6, "dan", "english");
		addPerson(7, "liza", "holland");
	};	

	$scope.searchPerson = function(id){
		$scope.notFind = true;
		if (countdownInterval){
			$interval.cancel(countdownInterval);
			$scope.countdown = null;
		}
		for (var i = 0; i <= people.length - 1; i++) {
			if(people[i].id == id){
				$log.info("id found: " + id);
				$scope.person = people[i];
				$scope.notFind = false;
				break;
			}			
		}
	};

	var decrementCountdown = function(){
		$scope.countdown -= 1;
		if($scope.countdown < 1){
			$scope.searchPerson(1);
		}
	};

	var startCountdown = function(){
		//Método a llamar, cada X milisegundos, cantidad de intervalos que uno quiere
		countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
	};

	$scope.init = function(){
		createPeople();		
		startCountdown();
	};	

	$scope.countdown = 5;
	var countdownInterval = null;
});