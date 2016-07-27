(function() {
    'use strict';

    angular.module('myApp')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    'templateUrl': 'partials/select_item_template.html',
                    'controller': 'selectItemCtrl'
                })
                .when('/viewCart', {
                    'templateUrl': 'partials/view_cart.html',
                    'controller': 'viewCartCtrl'
                })
                .when('/payNow', {
                    'templateUrl': 'partials/pay_now.html',
                    'controller': 'payNowCtrl'
                })
                .otherwise('/');
        });
})();
