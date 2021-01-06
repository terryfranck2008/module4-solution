'use strict';

angular.module('MenuApp')
.controller('HomeController', HomeController);

HomeController.$inject = ['$state'];
function HomeController($state){
    var home = this;

    home.goTo = function(){
        $state.go('categories');
    }
}