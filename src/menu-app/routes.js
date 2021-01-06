(function(){

    'use strict';
    angular.module('Routes', [])
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){

        $stateProvider
        .state('home',{
            url:'/',
            data: {
                label: 'Home' //label to show in breadcrumbs
            },
            templateUrl:'src/menu-app/home/home.template.html',
            controller:'HomeController',
            controllerAs: 'HomeCtrl'
        })
        .state('categories',{
            url:'/categories',
            data: {
                label: 'Categories' //label to show in breadcrumbs
              },
            templateUrl:'src/menu-app/categories/categories.template.html',
            controller:'CategoryController',
            controllerAs: 'CategoryCtrl',
            resolve:{
                categories: ['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items',{
            url:'/categories/{category}/items',
            data: {
                label: 'Items' //label to show in breadcrumbs
              },
            templateUrl:'src/menu-app/categories/items/item.template.html',
            controller:'ItemsController',
            controllerAs: 'ItemsCtrl',
            resolve:{
                items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
                    return MenuDataService.getItemsForCategory($stateParams.category);
                }]
            }
        });

        // $urlRouterProvider.when('',"/home");
        $urlRouterProvider.otherwise('/');
    }
})();