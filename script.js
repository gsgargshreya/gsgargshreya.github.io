var app = angular.module('myapp',['ngRoute'], ['ngAnimate']);

app.config(function($routeProvider){
	$routeProvider.when("/projects",{templateUrl:'projects.html'});
});


