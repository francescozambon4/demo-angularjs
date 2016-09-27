angular.module("demoApp")

.controller("NewsCtrl", function($http, URL){

	$http.get(URL + "/posts")
	
	.then(function(result){
		this.news = result.data;
		//this.news = result.data.splice(0, 13);
		//console.log(this.news);
	}.bind(this));
})