(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('baseUrl', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'baseUrl'];
    function MenuDataService($http, baseUrl) {
        var menuData = this;

        menuData.getAllCategories = function () {

            return $http.get(baseUrl + '/categories.json').then(
                function (response) {
                    return response.data;
                }, function (error) {
                    return error;
                })
        };

        menuData.getItemsForCategory = function (categoryShortName) {

            return $http({
                method: 'GET',
                url: baseUrl + '/menu_items.json',
                params: { category: categoryShortName }
            }).then(function (response) {

                return response.data.menu_items.length > 0 ? response.data.menu_items : [];
            }, function (error) {

                return error;
            })
        };
    }
})();