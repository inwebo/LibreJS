//<![CDATA[
/**
 * Cross domain communication.
 *
 * L'API s'appuie sur la méthode postMessage() de l'objet windows.
 *
 * https://developer.mozilla.org/fr/docs/Web/API/Window.postMessage
 */
;(function(window, document, ud){

    XD = Xdomain = CrossDomain = {

        /**
         * Permet la communication XDomain dans les deux direction depuis l'iframe 'iframe' vers 'target'.
         *
         * (domNode)    from          : Une référence valide vers un objet window.
         * (string)     to            : Un domaine valide vers lequel les messages seront envoyés.
         */
        client : function( from, to ) {

            var plugin = this;

            plugin.from = iframe;
            plugin.to   = target;

            // Constructeur
            var init = function() {
                return plugin;
            };

            // Envoit du message
            plugin.msg = function( msg ) {
                plugin.from.postMessage( msg, plugin.to );
            };

            init();

        },

        /**
         * Ecouteur des messages.
         */
        server : function() {

            var plugin = this;

            /**
             * Set une fonction de callback lors de la récéption d'un message.
             *
             * La fonction de callback doit pouvoir traité l'evenement event.
             * https://developer.mozilla.org/fr/docs/Web/API/Window.postMessage#The_dispatched_event
             *
             * @param callback
             */
            plugin.attachCallback = function( callback ) {
                if ( window.addEventListener ){
                    addEventListener("message", callback, false);
                } else {
                    attachEvent("onmessage", callback);
                }
            };

        }
    };
})(window, document);
//]]>