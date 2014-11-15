//<![CDATA[
;(function(window, ud){
/**
 * Dom ready universel (FF, Chrome / Chromium, Opera, IE >= 9, Safari).
 * N'est pas aussi fin que Jquery, Prototype, Dojo mais pèse 938 o & 158 o minifié.
 *
 * <code>
 * 	Dom.ready( function(){
 *		alert('I'm ready');
 *	} );
 * </code>
 *
 * @type {{ready: Function}}
 * @todo Permettre une liste de callback.
 */
Dom = {
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