(function(){

    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items', '$stateParams'];
    function ItemsController(items, $stateParams){

        var itemsCtrl = this;

        itemsCtrl.category = $stateParams.category;
        itemsCtrl.listItems = items;


    }
})();