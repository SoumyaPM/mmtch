(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('payNowCtrl', payNowCtrl);
    payNowCtrl.$inject = ['$scope'];

    function payNowCtrl($scope) {
        $scope.message = 'Thank you for shopping with us';
    }
})();
