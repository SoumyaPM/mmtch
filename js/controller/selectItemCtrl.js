(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('selectItemCtrl', selectItemCtrl);
    selectItemCtrl.$inject = ['$scope', 'toyService'];

    function selectItemCtrl($scope, toyService) {
        $scope.toyData = toyService.init();
        $scope.addItem = function(index) {
            toyService.setData($scope.toyData[index], 'add');
            $scope.toyData[index].count++;
        }

        $scope.removeItem = function(index) {
            toyService.setData($scope.toyData[index], 'remove');
            $scope.toyData[index].count ? $scope.toyData[index].count-- : angular.noop;
        }
    }
})();
