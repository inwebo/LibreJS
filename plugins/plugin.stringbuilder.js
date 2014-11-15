//<![CDATA[
/**
 * Objet permettant la concaténation de string. Est beaucoup plus rapide que la concaténation avec l'opérateur "+";
 *
 * http://jsperf.com/string-concat-vs-array-join-10000/8
 */
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs || {};
    var Lp  = L.Plugins      = L.Plugins      || {};

    Lp.StringBuilder = function() {

        var plugin = this;

        var init= function(){
            plugin.words = [];
            return plugin;
        };

        plugin.clear = function() {
            plugin.words.length = 0;
        };

        plugin.append = function( string ) {
            plugin.words.push( string );
        };

        plugin.length = function() {
            return plugin.words.length;
        };

        plugin.toString = function( separator ){
            var separator = " " || separator;
            return plugin.words.join( separator );
        };

        plugin.replace = function( searchValue, replaceValue ) {
            var length = plugin.words.length;
            for( var index = 0; index < length; index++ ) {
                plugin.words[index] = plugin.words[index].replace( searchValue, replaceValue );
            };
        };

        init();
    };

})(window, document);
//]]>