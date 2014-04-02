/**
 * @author : <hannotin_julien@yahoo.fr>
 */
; (function (window, document, String, ud) {
    window.Libre = window.Libre || {};
    window.Libre.Settings = window.Libre.Settings || {};
    window.Libre.Plugins = window.Libre.Plugins || {};
    /**
     * @todo : Permettre une cible (parent, custom, etc ...)
     * @param options
     * @constructor
     */
    window.Libre.Plugins.Responsive = function (parentNode, childNode) {

        var defaults = {
            parentNode: parentNode,
            childNode: childNode
        };
        var plugin = this;

        plugin.init = function (parentNode, childnode) {
                        addListener();
        };

        var addListener = function () {
            window.onresize = function () {
                var parentDim = getDimensions(defaults.parentNode);
                setDimensions(defaults.childNode, parentDim);
            };
        };

        plugin.isValidNode = function () {};

        var setDimensions = function (domNode, dim) {
            //console.log(dim[0]);
            domNode.width = dim[0];
            domNode.height = dim[1];
        };

        var getDimensions = function (domNode) {
            var dim = [];
            dim.push(domNode.offsetWidth);
            dim.push(domNode.offsetHeight);
            return dim;
        };

        plugin.init();
    };
})(window, document, String);

