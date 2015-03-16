(function($) {
    'use strict';
    
    window.test = {};
    
    if(!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
       
            var replaced = this.replace(/{(\d+)}/g, function(match, number) {
                   var a = typeof args[number] !== 'undefined' ? args[number] : match;
                   return a;
                });
            
            return replaced;
        };
    }
    
    function ajax(service, config) {
        var o = $.extend({
            async: false,
            contentType: 'application/json'
        }, config);
        
        return $.ajax('/sunloans/' + service, o);
    }
    
    window.test.get = function(service, config) {
        var response;
        
        if (typeof config === 'undefined') {
            response = ajax(service);

            return response.responseJSON;
        }
        
        return ajax(service, $.extend({type: 'GET'}, config));
    };
    
    window.test.put = function(service, config) {
        return ajax(service, $.extend({ type: 'PUT' }, config));
    };
    
    window.test.post = function(service, config) {
        return ajax(service, $.extend({ type: 'POST' }, config));
    };
    
    window.test.delete = function(service, config) {
        return ajax(service, $.extend({type: 'DELETE'}, config));
    };
    
    window.test.getForm = function() {
        var form = {};
        
        $('[name]').each(function() {
            var element = $(this);
            var name = element.attr('name');
            var value = element.val();

            if(element.is('input[type=checkbox]')) {
                value = element.prop('checked');
            }

            console.log(name + ':' + value);

            form[name] = value;
        });
        
        return form;
    };
    
    window.test.elm = function(id) {
        return document.getElementById(id);
    }

    window.test.session = sessionStorage;
    
    window.test.getAppId = function(xhr) {
        var location = xhr.getResponseHeader('location');
        var pos = location.lastIndexOf('/');
        return location.substr(pos + 1);
    };
    
    /*
    $(document).ready(function() {
        $('#save').click(function() {
            console.info('save click');
        });
    });
    */
    
        
})(jQuery);
