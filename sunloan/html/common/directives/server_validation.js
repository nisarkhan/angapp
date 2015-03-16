angular
        .module('sunloan')
        .directive('serverValidation', function() {
          
          return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
              
              function reset() {
                // ask angular to set form.ctrl.$error.serverValidation to false
                // this means that control is valid
                scope.$apply(function() {
                  ctrl.$setValidity('serverValidation', true);
                });
              }

//              elm.on('change', reset);
              elm.on('keydown', reset);
              elm.parent().on('click.bs.dropdown', '[data-toggle=dropdown]', reset);

            }
          };
        });
