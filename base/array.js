;(function(window, document, Array, ud){
    //<![CDATA[
    if ( !Array.prototype.forEach ) {
        /**
         * Iteration d'un tableau avec appel d'une function de callback fn dans le context scope
         * @param fn
         * @param scope
         */
        Array.prototype.forEach = function( fn, scope ) {
            'use strict';
            var i, len;
            for (i = 0, len = this.length; i < len; ++i) {
                if (i in this) {
                    fn.call(scope, this[i], i, this);
                }
            }
        };
    }
    //]]>
})(window, document, Array);