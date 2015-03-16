angular
  .module('sunloan')
  .config(function($routeProvider, $httpProvider) {

      $routeProvider

        /* dashboard */
        .when('/', {
          controller: 'dashboard',
          templateUrl: 'dashboard/index.html'
        })

        /* borrower */
        .when('/search/:query', {
          controller: 'borrower.search',
          templateUrl: '../common/borrower/search.html'
        })
        .when('/borrower/:account/loan/:id', {
          controller: 'borrower.loan',
          templateUrl: '../common/borrower/loan.html'
        })
        .when('/borrower/:id', {
          controller: 'borrower',
          templateUrl: '../common/borrower/dashboard.html'
        })
        
        /* drawers */
        .when('/drawer/cash_transfer/:id?', {
          controller: 'drawer',
          templateUrl: '../common/drawer/cash_transfer.html'
        })
        .when('/drawer/edit/:id', {
          controller: 'drawer',
          templateUrl: '../common/drawer/edit.html'
        })
        .when('/drawer/manage/:id?', {
          controller: 'drawer',
          templateUrl: '../common/drawer/manage.html'
        })

        /* writeoffs */
        .when('/writeoff', {
          controller: 'writeoff',
          templateUrl: '../common/writeoff/index.html'
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

        /* checkboxs */
        .when('/check/write', {
          controller: 'check',
          templateUrl: '../common/check/write.html'
        })
        .when('/check/maintenance', {
          controller: 'check',
          templateUrl: '../common/check/maintenance.html'
        })

        /* collection */
        .when('/collection/assign', {
          controller: 'collection',
          templateUrl: '../common/collection/index.html'
        })

        /* reports */
        .when('/reports', {
          controller: 'report',
          templateUrl: '../common/report/index.html'
        })
        
        .otherwise({
          redirectTo: '/'
        });

  });