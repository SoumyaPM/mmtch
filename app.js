var app = angular.module("Dashboard", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/AddNewToyCategory", {
        templateUrl : '/partials/createToyCategory.html',
		controller: 'toyDashboardCtrl'
    })
    .when("/AddNewToy", {
        templateUrl : '/partials/createToy.html',
		controller: 'toyDashboardCtrl'
    })
    .when("/tableView", {
        templateUrl : "/partials/tableView.html",
		controller: 'tableViewCtrl'
    });
}]);

app.controller("toyDashboardCtrl", ['$scope', '$http', function($scope, $http) {

	var rowVisible = false;
    $scope.customAttributes = [];
    $scope.counter = 1;
	$scope.item = {
        "toyid": {
            "id": "100",
            "flag": false
        },
        "toyname": {
            "name": "",
            "flag": false
        },
        "toycategory": {
            "category": "",
            "flag": false
        },
        "toyprice": {
            "price": "",
            "flag": false
        },
        "customattribute": {
            "attribute": "",
            "value": "",
            "flag": false
        }
	};
	$scope.savedToyCategories = localStorage.getItem('toyCategory');
	$scope.toyCategory = (localStorage.getItem('toyCategory')!=='null') ? JSON.parse($scope.savedToyCategories) : 
		[ {CategoryName: 'Transforming toys',items: []}, {CategoryName: 'Mechanical toys', items: []} ];
	localStorage.setItem('toyCategory', JSON.stringify($scope.toyCategory));


	/**method to create Toy category*/
	$scope.AddNewToyCategory = function() {
		$scope.toyCategory.push({
			CategoryName: $scope.toyCategoryName,
			items: []
		});
		$scope.toyCategoryName = ''; //clear the input after adding
		localStorage.setItem('toyCategory', JSON.stringify($scope.toyCategory));
	};

	/**method to create Toy Row*/
	$scope.AddNewToyRow = function() {
		$scope.rowVisible = true;
		//$scope.item.toyId = $scope.item.toyId + 1;
	};
    
    /**method to create Toy*/
	$scope.AddNewToy = function() {
		var toyCategory = JSON.parse(localStorage.getItem('toyCategory'));
		angular.forEach(toyCategory, function(value) {
			if(value.CategoryName === $scope.item.toycategory.category) {
				value.items.push($scope.item);
			}else {
                value.items.push({
                    "toyid": {
                        "id": "100",
                        "flag": false
                    },
                    "toyname": {
                        "name": "Pikachu",
                        "flag": false
                    },
                    "toycategory": {
                        "category": "Transforming toys",
                        "flag": false
                    },
                    "toyprice": {
                        "price": "4000",
                        "flag": false
                    },
                    "customattribute": {
                        "attribute": "",
                        "value": "",
                        "flag": false
                    }})
            }
		});
		localStorage.setItem('toyCategory', JSON.stringify(toyCategory));
		$scope.showSuccessStatus = true;
	};
    
    /**Method to add new custom attribute*/
    $scope.addCustomAttribute = function() {
        $scope.customAttributes.push('customAttributes' + $scope.counter);
        $scope.counter++;
    }
    
    $scope.deleteCustomAttribute = function (index) {
        $scope.customAttributes.splice(index, 1);
        $scope.item.customattribute.attribute = '';
        $scope.item.customattribute.value = '';
        $scope.item.customattribute.flag = '';
    }

}]);
app.controller("tableViewCtrl", ['$scope', '$http', function($scope, $http) {
	$scope.toyCategory = (localStorage.getItem('toyCategory')!==null) ? JSON.parse(localStorage.getItem('toyCategory')) : [];
}]);