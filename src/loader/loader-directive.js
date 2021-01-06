(function(){
    'use strict';

    angular.module('LoaderApp')
    .directive('loaderDirective', loaderDirective);


    function loaderDirective(){
        return {
            templateUrl:'src/loader/itemsloaderindicator.template.html',
            link: loaderDirectiveLink
        }
    }

    function loaderDirectiveLink(scope, el, attr, controller){

        var element = el.find("div");
        scope.$watch('showLoader', function(newValue, oldValue){
 
            if(newValue === true){
                element.css('display','block');
            }else{
                element.css('display','none');

            }
        });

    }
})();