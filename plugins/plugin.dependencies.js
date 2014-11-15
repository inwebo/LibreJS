//<![CDATA[
'use strict';
/**
 * <code>
 * var onready = new window.Libre.Plugins.OnReady([], function(){console.log("Tous les noeuds")});
 * </code>
 */
;(function( window, document, ud ){

    window.Libre.Plugins.OnReady = function ( nodes, callBackReady, callBackError ) {

        var maxLoop = 6;
        var loopInterval = 333;
        var nodes = [];

        var plugin = this;

        /**
         * loop int Nombre d'essaie d'inclusion.s
         * settings obj Configuration utilisateur
         * seed int Timestamp unique
         *
         * @returns {*}
         */
        plugin.init = function () {
            plugin.nodes = nodes;
            plugin.ready = false;
            plugin.callback = {
                error: callBackReady,
                ready: callBackError
            };
            plugin.checkDependencies;
            return plugin;
        };

        /**
         * V�rifie toutes les 333ms si les d�pendances sont pr�tes.
         * @type {number}
         */
        plugin.checkDependencies = setInterval(function () {
            ++plugin.loop;
            if (plugin.loop >= plugin.settings.maxLoop) {
                clearInterval(plugin.checkDependencies);
                plugin.callback.error.call();
            }
            if (plugin.isReady()) {
                clearInterval(plugin.checkDependencies);
                plugin.ready = true;
                plugin.callback.ready.call();
            }
        }, 333);

        /**
         * Assertion, toutes les dépendances sont incluses correctement
         * @returns {boolean}
         */
        plugin.isReady = function () {
            var ready = true;
            plugin.nodes.forEach(function (element) {
                if (element.nodeType === 1) {
                    var tagName = element.tagName.toLowerCase();
                    switch (tagName) {
                        case tagName === "script":
                            if (tagName.readyState === 'complete') {
                                ready = ready && true;
                            }
                            else {
                                ready = ready && false;
                            }
                            break;

                        case tagName === "iframe":
                            if (tagName.readyState === 'complete') {
                                ready = ready && true;
                            }
                            else {
                                ready = ready && false;
                            }
                            break;
                    }
                }
            });
            return ready;
        };

        /**
         * Callback onReady
         * @param callback
         * @returns {*}
         */
        plugin.onReady = function (callback) {
            plugin.callback.ready = callback;
            return plugin;
        };

        /**
         * Callback d'erreur.
         * @param callback
         */
        plugin.onError = function (callback) {
            plugin.callback.error = callback;
            return plugin;
        };

        plugin.init();
    };

})(window, document, String);
//]]>