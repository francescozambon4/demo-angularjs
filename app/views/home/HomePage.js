angular.module("demoApp")

.controller("HomePageCtrl", function($http, URL){
	this.title = "Marketing Stuf!!!";
	this.description = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.";
	this.button = "Get started today";
	this.buttonlink = "#/news";
	
	// workaround this
	/*
	var self = this;
	$http.get("http://jsonplaceholder.typicode.com/posts")
	.then(function(result){
		//console.log(result);
		self.news = result.data.splice(0, 3);
	});
	*/
	
	// workaround this, contestualizzo il this con la funzione bind
	$http.get(URL + "/posts")
	.then(function(result){
		//console.log(result);
		this.news = result.data.splice(0, 3);
	}.bind(this));
})