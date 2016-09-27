angular.module("demoApp")

.config(function($routeProvider){
	$routeProvider.when("/homepage", {
		templateUrl: "app/views/home/homepage.tpl.html",
		controller: "HomePageCtrl",
		controllerAs: "ctrl"
	})
	
	.when("/news", {
		templateUrl: "app/views/news/news.tpl.html",
		controller: "NewsCtrl",
		controllerAs: "ctrl"
	})
	
	.when("/news/:id", {
		templateUrl: "app/views/news/news.details.tpl.html",
		controller: "NewsDetailCtrl",
		controllerAs: "ctrl"
		
	})
	
	.otherwise({ redirectTo: "homepage"})
})