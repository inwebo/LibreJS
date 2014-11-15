//<![CDATA[
'use strict';
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};

    Lp.Mail = {
        /**
         * Simple vérification d'une adresse mail.
         * @param email String L'email à tester.
         * @returns {boolean}
         */
        validate : function( email ){
            var regexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexPattern.test(email);
        }
    }
})(window);
//]]>