var app = angular.module("myApp",[]);
app.controller("HeadController", function($scope){
	$scope.title = "AngularJS: Get Started";
});

app.controller("MainController", function($scope, $sce, $interval){
	$scope.title = "AngularJS: Get Started";
	people = [];

	$scope.init = function(){
		var start = createPeople();
		start.addPerson(1, "nahuel", "garcia");
		start.addPerson(2, "jeff", "kiwi");
		start.addPerson(3, "ben", "belgium");
		start.addPerson(4, "carolin", "germany");
		start.addPerson(5, "claire", "scotland");
		start.addPerson(6, "dan", "english");
		start.addPerson(7, "liza", "holland");
	};

	var createPeople = function(){
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
		return {
			addPerson: addPerson
		};
		
	};

	$scope.searchPerson = function(id){
		$scope.notFind = true;
		for (var i = 0; i <= people.length - 1; i++) {
			if(people[i].id == id){
				$scope.person = people[i];
				$scope.notFind = false;
				break;
			}					
		}
	};



	var decrementCountdown = function(){

	};

	decrementCountdown();

});