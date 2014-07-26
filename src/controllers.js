var sMailServices = angular.module('sMail', ['ngRoute'])

function sMailRouteConfig($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'ListController',
            templateUrl:'src/list.html'
    })
        .when('/list',{
            controller: 'ListController',
            templateUrl:'src/list.html'
        })
        .otherwise({
            redirectTo: '/list'
        });
}

sMailServices.config(sMailRouteConfig);

mymessages=[
    {id:0, sender:"Adoni", date:'Dec 7, 2013 8:15:13'},
];

sMailServices.controller('ListController',function($scope) {
    $scope.messages=mymessages;
});
