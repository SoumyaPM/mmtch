(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('viewCartCtrl', viewCartCtrl);
    viewCartCtrl.$inject = ['$scope', 'toyService'];

    function viewCartCtrl($scope, toyService) {
        $scope.toyData = toyService.getData();
        $scope.totalAmount = 0;
        angular.forEach($scope.toyData, function(attr, index) {
            if (attr.count > 0) {
                $scope.totalAmount += attr.count * attr.price;
            }
        })
    }
})();
