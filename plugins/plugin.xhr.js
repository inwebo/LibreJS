//<![CDATA[
;(function(window, ud){

__Xhr = {
    /**
     * Call le callback lorsque le document's ready state vaut complete.
     * @param callback Closure de callback.
     * @param interval Interval de vérification de l'attribut readyState de document en ms.
     */
	ready : function( callback, interval ) {

        var callback = callback;

        var init = function() {

            var interval = setInterval( function () {
                if( document.readyState === "complete" ) {
                    callback.call();
                    clearInterval( interval );
                }
            }, ( interval || 100 ) );
        };

        init();
	}
};
})(window);
//]]>