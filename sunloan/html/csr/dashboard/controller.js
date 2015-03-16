'use strict';
/* Dashboard Controller */

angular.module('sunloan')
  .controller('dashboard', 
    function($scope, $storage, $application, $location, $timeout){
      
      $scope.today = new Date();

      /* set template subviews */
      $scope.templates = {
        stream : "dashboard/stream.html"
      };

      
      $scope.new_application = function(){

        $storage.remove('application');
        $location.path('/application/create');
      }

      $scope.$on('$viewContentLoaded', function(){
        
          console.log("@init: dashboard");
          
          /* get applications in review and fill the datatable*/
          $application.query({ status : "Under review" }, function( applications){
            $scope.grids.pending.$add(applications);
          });

      });

  });