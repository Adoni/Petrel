var PetrelServices = angular.module('Petrel', ['ngRoute'])


function PetrelRouteConfig($routeProvider){
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

PetrelServices.config(PetrelRouteConfig);

plans=[
    {
        pid:0,
        starting_time:'2014.1.1',
        time_to_finish:'2014.5.6',
        content:'完成Petrel',
        state:0,
        tasks:[]
    },
    {
        pid:0,
        starting_time:'2014.1.1',
        time_to_finish:'2014.5.6',
        content:'完成Petrel',
        state:0,
        tasks:[]
    },
]
PetrelServices.controller('ListController',function($scope) {
    $scope.plans=plans;
});
