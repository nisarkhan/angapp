'use strict';
angular
        .module('sunloan')
        .filter('sumValues', function () {

            return function (data, type) {

                var total = 0.00;

                if (Array.isArray(data)) {

                    angular.forEach(data, function (item) {

                        total += parseFloat(item[type].replace(/\,/g,''));

                    });
                }

                return total;
            };
        });

