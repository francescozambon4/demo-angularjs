angular.module("demoApp", ["ngRoute"])

//cotrutto per creare un servizio (short way ha limitazioni rispetto al servizio)
.value("URL", "http://jsonplaceholder.typicode.com")

.controller("NavBar", function($rootScope, $location){
	
	$rootScope.$on("$routeChangeSuccess", function(){
		//console.log($location.path());
		this.active = $location.path()
	}.bind(this));
})

