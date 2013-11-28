;(function(window, document, String, ud){
window.Libre          = window.Libre || {};
window.Libre.Settings = window.Libre.Settings || {};
window.Libre.Plugins  = window.Libre.Plugins || {};
/**
 *
 * @param options
 * @constructor
 */
window.Libre.Plugins.Inject = function(options) {

    var defaults = {
        maxLoop : 2,
        js      : new Array,
        css     : new Array,
        nocache : true
    };
    var plugin = this;

    /**
     * loop int Nombre d'essaie d'inclusion.
     * settings obj Configuration utilisateur
     * seed int Timestamp unique
     *
     * @returns {*}
     */
    plugin.init = function() {
        plugin.loop       = 0;
        plugin.settings   = merge(defaults, options);
        plugin.seed       = Date.now();
        plugin.nodes      = new Array;
        plugin.ready      = false;
        plugin.callback   = {
            error:function(){},
            ready:function(){}
        };
        factory();
        plugin.checkDependencies;
        return plugin;
    };

    /**
     * Construit tous les noeuds html
     */
    var factory = function() {
        plugin.settings.js.forEach(function(element, index){
            var src = element;
            src += ( plugin.settings.nocache ) ? '?' + plugin.seed : null;
            var js = document.addJs(src,'js-'+index);
            plugin.nodes.push(js);
        });
        plugin.settings.css.forEach(function(element, index){
            var src = element;
            src += ( plugin.settings.nocache ) ? '?' + plugin.seed : null;
            var css = document.addCss(src,'css-'+index);
            plugin.nodes.push(css);
        });
    };

    /**
     * Vérifie toutes les 333ms si les dépendances sont prêtes.
     * @type {number}
     */
    plugin.checkDependencies = setInterval(function() {
        ++plugin.loop;
        if( plugin.loop >= plugin.settings.maxLoop ) {
            clearInterval( plugin.checkDependencies );
            plugin.callback.error.call();
        }
        if( plugin.isReady() ) {
            clearInterval( plugin.checkDependencies );
            plugin.ready = true;
            plugin.callback.ready.call();
        }
    }, 333);

    /**
     * Assertion, toutes les dépendances sont incluses correctement
     * @returns {boolean}
     */
    plugin.isReady = function() {
        var ready = false;
        plugin.nodes.forEach(function(element){
            console.log(element.isReady);
            ready = ready || element.isReady;
        });
        return ready;
    };

    /**
     * Callback onReady
     * @param callback
     * @returns {*}
     */
    plugin.onReady = function( callback ){
        plugin.callback.ready = callback;
        return plugin;
    };

    /**
     * Callback d'erreur.
     * @param callback
     */
    plugin.onError = function( callback ) {
        plugin.callback.error = callback;
    };

    /**
     * Préparation de la configuration locale
     * @returns {{}}
     */
    var merge =  function () {
        var obj = {}, i = 0, il = arguments.length, key;
        if (il === 0) {
            return obj;
        }
        for (; i < il; i++) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    obj[key] = arguments[i][key];
                }
            }
        }
        return obj;
    };

    plugin.init();
};
})(window, document, String);
