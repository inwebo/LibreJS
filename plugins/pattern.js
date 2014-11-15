//<![CDATA[
'use strict';
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};

    /**
     * @param options
     * @constructor
     */
    Lp.PluginName = function(options) {

        var plugin = this;

        plugin.options = {};

        /**
         * construct
         * @returns {window.LibreJs.PluginName}
         */
        plugin.init = function(options) {
            plugin.options = options;
            return plugin;
        };

        plugin.init(options);
    };

})(window, document);
//]]>