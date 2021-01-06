(function(){

    'use strict';
    angular.module('MenuApp')
    .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['categories'];
    function CategoryController(categories){

        var categoryCtrl = this;
        categoryCtrl.listCategories = categories;
        console.log(categoryCtrl.listCategories, categories);
    }
})();