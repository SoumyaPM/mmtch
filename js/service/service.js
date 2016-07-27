(function() {
    'use strict';

    angular.module('myApp')
        .service('toyService', toyService);
    toyService.$inject = ['$window'];

    function toyService($window) {
        return {
            "init": function() {
                $window.sessionStorage.removeItem('toyData');
                return [{
                    "id": 201,
                    "subcategory": "Toy animals",
                    "price": 50,
                    "count": 0
                }, {
                    "id": 202,
                    "subcategory": "Art and craft toys",
                    "price": 60,
                    "count": 0
                }, {
                    "id": 203,
                    "subcategory": "Construction toys",
                    "price": 80,
                    "count": 0
                }, {
                    "id": 204,
                    "subcategory": "Designer toys",
                    "price": 100,
                    "count": 0
                }, {
                    "id": 205,
                    "subcategory": "Dolls",
                    "price": 85,
                    "count": 0
                }, {
                    "id": 206,
                    "subcategory": "Educational toys",
                    "price": 45,
                    "count": 0
                }, {
                    "id": 207,
                    "subcategory": "Electronic toys",
                    "price": 150,
                    "count": 0
                }, {
                    "id": 208,
                    "subcategory": "Executive toys",
                    "price": 90,
                    "count": 0
                }, {
                    "id": 209,
                    "subcategory": "Mechanical toys",
                    "price": 90,
                    "count": 0
                }, {
                    "id": 210,
                    "subcategory": "Novelty items",
                    "price": 80,
                    "count": 0
                }, {
                    "id": 211,
                    "subcategory": "Physical activity and dexterity toys",
                    "price": 45,
                    "count": 0
                }, {
                    "id": 212,
                    "subcategory": "Powered toys",
                    "price": 60,
                    "count": 0
                }, {
                    "id": 213,
                    "subcategory": "Practical joke devices",
                    "price": 70,
                    "count": 0
                }, {
                    "id": 213,
                    "subcategory": "Puppetry",
                    "price": 80,
                    "count": 0
                }, {
                    "id": 214,
                    "subcategory": "Puzzles",
                    "price": 50,
                    "count": 0
                }, {
                    "id": 215,
                    "subcategory": "Scale modeling",
                    "price": 85,
                    "count": 0
                }, {
                    "id": 216,
                    "subcategory": "Water toys",
                    "price": 90,
                    "count": 0
                }, {
                    "id": 217,
                    "subcategory": "Toy vehicles",
                    "price": 60,
                    "count": 0
                }];
            },
            "getData": function() {
                return angular.fromJson($window.localStorage && $window.sessionStorage.getItem('toyData'));
            },
            "setData": function(selectedToy, attribute) {
                if (this.getData()) {
                    if (attribute === 'add') {
                        var data = this.getData(),
                            flag = true;
                        angular.forEach(data, function(attr, index) {
                            if (selectedToy.id === attr.id) {
                                data[index].count++;
                                flag = false;
                                return;
                            }
                        });
                        if (flag) {
                            var tempData = angular.copy(selectedToy);
                            tempData.count++;
                            data.push(tempData);
                        }
                        $window.localStorage && $window.sessionStorage.setItem('toyData', angular.toJson(data));
                    } else {
                        var data = this.getData();
                        angular.forEach(data, function(attr, index) {
                            if (selectedToy.id === attr.id) {
                                data[index].count ? data[index].count-- : angular.noop;
                                $window.localStorage && $window.sessionStorage.setItem('toyData', angular.toJson(data));
                                return;
                            }
                        });
                    }
                } else {
                    if (attribute === 'add') {
                        var data = [];
                        data.push(angular.copy(selectedToy));
                        data[0].count++;
                        $window.localStorage && $window.sessionStorage.setItem('toyData', angular.toJson(data));
                    }
                }
            }

        }
    }

})();
