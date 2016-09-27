angular.module("demoApp")

.controller("NewsDetailCtrl", function($routeParams, $http, URL){
	
	var id = $routeParams.id;
	
	$http.get(URL + "/posts/" + id)
	.then(function(result){
		this.news = result.data;
		console.log(this.news);
	}.bind(this));
});