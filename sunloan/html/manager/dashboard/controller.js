'use strict';
/* Dashboard Controller */

angular.module('sunloan')
  .controller('dashboard', 
    function($scope, $storage, $drawer, $application, $location, $timeout){
      
      $scope.today = new Date();

      /* set template subviews */
      $scope.templates = {
        stream : "dashboard/stream.html",
        modal: "dashboard/drawer.html"
      };

      $scope.review = function(e){

        var data = $scope.grids.pending.$get(e);
        $storage.put('application', data);
        console.log("@loan", data);
        $location.path('/application/create');

      };

      $scope.new_application = function(){

        $storage.remove('application');
        $location.path('/application/create');
      }

      $scope.$on('$viewContentLoaded', function(){
        
          console.log("@init: dashboard");
          /* get drawers data and fill the datatable */
          $drawer.all(function( response){
            
            $timeout(function(){
              $scope.grids.drawer.$add(response);
            }, 300);
          
          });

          /* get applications in review and fill the datatable*/
          $application.query({ status : "Under review" }, function( applications){
            $scope.grids.pending.$add(applications);
          });
          
           /* get applications that approved from db*/
          $application.query({ status: "Approved" }, function (applications) {               
            $scope.grids.approved.$add(applications);
          });

      });

  });