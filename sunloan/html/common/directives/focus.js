/*angular
  .module('sunloan')
  .directive('autoFocus', function($timeout) {
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            $timeout(function(){
                _element[0].focus();
            }, 0);
        }
    };
});
*/
angular
  .module('sunloan')
  .directive('showOnFocus', function() {
      
   return {
       restrict: 'A',
       link: function (scope, element) {
           var focused = false, opened = false;
           var select = element.children('input');
           var toggleInput = element.find('input')[0];

           var onfocus = function(){
              
               if(!focused && !opened) {
                  toggleInput.click();
                  opened = focused = true;
               } else if(opened) {
                  opened = false;
               }
                
           };
           var onhover = function(){ 
               
              if(!focused && !opened){
                  toggleInput.click();
                  opened = focused = true;
               };
               
               
           };

           var onblur = function(){
              focused = false;
           };
           element.bind('mouseenter', onhover);
           element.bind('click',onblur);
           select.bind('blur', onblur);
           select.bind('focus', onfocus);
           
           //onfocus();
       }
    };
});

