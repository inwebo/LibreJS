//<![CDATA[
'use strict';
;(function(window, document, ud){
    var w = window;
    var d = w.document;
    var L   = w.LibreJs = window.LibreJs || {};

    L.Selector = function(selector, context) {

        var plugin = this;

        plugin.context = null;
        plugin.selector = "";
        plugin.elements = [];

        plugin.init             = function (selector, context) {
            // Context
            plugin.context = (context !== ud) ? context : null;
            // Trim
            plugin.selector = selector.trim();
            // Delete multiple spaces
            plugin.selector = cleanSpaces(plugin.selector);

            // Non, le split se fait sur les espaces.
            // Split
            plugin.elements = plugin.selector.split(' ');

            return selectorStrategy();
        };

        var cleanSpaces         = function(_string) {
            return _string.replace(/\s{2,}/g, ' ');
        };

        var selectorStrategy    = function() {
            var nodes   = null;
            var total   = plugin.elements.length;
            var pointer = 0;

            plugin.elements.forEach(function(i,e){

                if(pointer <= total) {

                    pointer++;
                }
                else {

                }

                var selector = i.slice(1);

                // #
                if( isId(i) === true ) {
                    nodes = selectById(selector);
                }
                // .
                else if(isClass(i) === true) {
                    if( isMultipleClasses(i) ) {
                        selector = selector.replaceAll('.', ' ');
                        nodes = selectByClass(selector);
                    }
                    else {
                        nodes = selectByClass(selector);
                    }
                }
                // tag ?
                else if(isTagName(i) === true) {
                    nodes = selectByTagName(i);
                }

            });
            return nodes;
        };

        var isId                = function(_string){
            return _string.contains("#",0);
        };

        var isClass             = function(_string){
            return _string.contains(".",0);
        };

        var isTagName           = function(_string){
            return ( isId(_string) === false && isClass(_string) === false);
        };

        var isMultipleClasses   = function(_string){
            var occurences = (_string.match(/\./g) || []).length;
            return (occurences > 1 ) ? true : false;
        };

        var selectById          = function(_string){
            return( plugin.context === null )               ?
                d.getElementById(_string) :
                plugin.context.getElementById(_string);
        };

        var selectByClass       = function(_string){
            return d.getElementsByClassName(_string);
        };

        var selectByTagName     = function(_string){
            return d.getElementsByTagName(_string);
        };

        return plugin.init(selector, context);
    };

})(window, document);
//]]>