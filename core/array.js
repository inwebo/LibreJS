/**
 * Extends Array prototype
 */
//<![CDATA[
'use strict';
;(function(window, document, Array, ud){
    if ( !Array.prototype.forEach ) {
        /**
         * Iteration d'un tableau avec appel d'une function de callback fn dans le context scope
         * @param fn
         * @param scope
         */
        Array.prototype.forEach = function( fn, scope ) {
            var i, len;
            for (i = 0, len = this.length; i < len; ++i) {
                if (i in this) {
                    fn.call(scope, this[i], i, this);
                }
            }
        };
    };

    if (!Array.prototype.contains) {
        Array.prototype.contains = function(string) { return this.indexOf(string) != -1; };
    };

    if (!Array.prototype.diff) {
        Array.prototype.diff = function (a) {
            return this.filter(function (i) {
                return a.indexOf(i) < 0;
            });
        };
    };

    if(!Array.prototype.random) {
        Array.prototype.random = function(){
            return this[Math.floor(Math.random() * this.length)];
        };
    };

    if(!Array.prototype.removeElt) {
        Array.prototype.removeElt = function(index){
            return this.splice(index, 1);
        };
    };
})(window, document, Array);
//]]>