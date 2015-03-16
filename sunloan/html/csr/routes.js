angular
  .module('sunloan')
  .config(function($routeProvider, $httpProvider) {

      $routeProvider

        /* dashboard */
        .when('/', {
          controller: 'dashboard',
          templateUrl: 'dashboard/index.html'
        })

        /* applications */
        .when('/application/create', {
          controller: 'application.create',
          templateUrl: '../common/application/create.html'
        })
        .when('/application/borrower', {
          controller: 'application.borrower',
          templateUrl: '../common/application/borrower.html'
        })
        .when('/application/address', {
          controller: 'application.address',
          templateUrl: '../common/application/address.html'
        })
        .when('/application/options', {
          controller: 'application.options',
          templateUrl: '../common/application/options.html'
        })
        .when('/application/review', {
          controller: 'application.review',
          templateUrl: '../common/application/review.html'
        })
        .when('/application/decision', {
          controller: 'application.decision',
          templateUrl: '../common/application/decision.html'
        })
        
        .otherwise({
          redirectTo: '/'
        });

  });