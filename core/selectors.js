//<![CDATA[

;(function(window, document, ud){
    var w = window;
    var d = document;
    var L = w.LibreJs = window.LibreJs || {};

    L.Selector = function(selector, context) {

        var plugin = this;

        plugin.context = context;
        plugin.selector = "";
        plugin.elements = [];

        plugin.init             = function (selector, context) {
            // Context
            plugin.context = (context || null);
            // Trim
            plugin.selector = selector.trim();
            // Delete multiple spaces
            plugin.selector = cleanSpaces(plugin.selector);
            // Split
            plugin.elements = plugin.selector.split(' ');

            return selectorStrategy();
        };


        var selectorStrategy    = function() {
            var nodes   = null;

            // i : item
            // e : index
            plugin.elements.forEach(function(i,e){
                // #
                if( isId(i) ) {
                    nodes = selectById(type);
                }
                else {
                    if(isClass(i)) {
                        nodes = selectByClass(i.replaceAll('.', ' ').trim());
                    }
                    if(isTagName(i)) {
                        nodes = selectByTagName(i);
                    }
                }
                plugin.context = nodes;
            });
            return plugin.context;
        };

        //region Assertions
        var isId                = function(_string){
            return _string[0].contains("#");
        };

        var isClass             = function(_string){
            return _string[0].contains(".");
        };

        var isTagName           = function(_string){
            return (d.getElementsByTagName(_string).length > 0) ? true : false;
        };
        //endregion

        //region Selectors
        var selectById          = function(_string){
            return d.getElementById(_string);
        };

        var selectByClass       = function(_string){
            var e  = ( plugin.context || d ).getElementsByClassName(_string);
            return (e.length>0) ? e : null;
        };

        var selectByTagName     = function(_string){
            return d.getElementsByTagName(_string);
        };
        //endregion

        //region Helpers
        var cleanSpaces         = function(_string) {
            return _string.replace(/\s{2,}/g, ' ');
        };
        //endregion

        return plugin.init(selector, context);
    };

    /**
     * ReplaceAll
     */
    if (!String.prototype.replaceAll) {
        /**
         * Replace all find string by replace string.
         */
        String.prototype.replaceAll = function(find, replace){

            var escapeRegEx = function(_string){
                return _string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            };

            return this.replace(new RegExp(escapeRegEx(find), 'g'), replace);
        };
    }
})(window, document);
//]]>