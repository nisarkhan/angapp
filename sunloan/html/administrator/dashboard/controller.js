'use strict';
angular.module('sunloan')
        .controller('dashboard', function ($rootScope, $scope, $storage,
                $timeout, $location, $drawer, $application, $callroute, 
                $delinquency, $filter, $path) {

            $scope.employee_id = $rootScope.user.id;

            $scope.today = new Date();
            $scope.applications = {
                not_completed: [],
                under_review: [],
                approved: [],
                declined: []
            };

            /* set template subviews */
            $scope.templates = {
                stream: "dashboard/stream.html",
                modal: "dashboard/drawer.html",
                loan: "dashboard/make_loan_confirm.html"
            };

            /* get drawers data and fill the datatable */
            $drawer.all(function (drawers) {
                $scope.drawers = drawers;
            });

            /* get applications by statuses */
            $application.query({status: "Not completed"}, function (rows) {
                $scope.applications.not_completed = rows;
            });

            $application.query({status: "Under review"}, function (rows) {
                $scope.applications.under_review = rows;
            });

            $application.query({status: "Approved"}, function (rows) {
                $scope.applications.approved = rows;
            });


            $application.query({status: "Declined"}, function (rows) {
                $scope.applications.declined = rows;
            });


            $delinquency.metrics({action: 'recency'}, function (metrics) {
                console.log("@metrics", metrics);
                $scope.metrics = metrics;
            });

            /* @Events */
            $scope.make_loan = function (e) {
                var data = $scope.grids.approved.$get(e);
                $location.path('/loan/' + data.id + '/make');
            };

            /* review application */
            $scope.open = function (grid, e, section) {
                var data = $scope.grids[grid].$get(e);
                $location.path('/application/' + data.id + (section ? '/' + section : ''));
            };

            /* manage call routes:loan */
            $scope.manage = function (e) {
                var data = $scope.grids.routes.$get(e);
                console.log("@loan", data);
                $location.path('/borrower/' + data.account_number).replace( );
            };

            $scope.close = function (e) {
                var data = $scope.grids.routes.$get(e);
                var assigned = {id: data.assigned_id, loan_id: data.loan_id, status: 'Complete', employee_id: data.employee_id};
                $callroute.update(assigned, function (data) {
                    console.log(data);
                    $scope.filter('Assigned');
                });
            }

            /* filter call routes */
            $scope.filter = function (status) {

                if (status == 'Assigned') {

                    if ($scope.employee_id) {
                        $callroute.$assigned.get({status: status, employee_id: $scope.employee_id},
                        function (data) {
                            $scope.routes = $filter('filter')(data, {type_name: status});
                        }, function (data) {
                            console.log(data);
                        });
                    }
                }

                $scope.route_status = status;
            };

            /* get call routes: Assigned   */
            $scope.filter('Assigned');

            $scope.letter = function (value) {
                var url = $path.rest + '/rest/application/' + $scope.application.id + '/letter/' + value;
                $window.open(url);
            }

        });
