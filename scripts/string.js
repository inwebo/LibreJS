;(function(window, document, String, ud){
    if (!String.prototype.contains) {
        String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
    }

    if (!String.prototype.toNamespace) {
        /**
         * Convertit une chaine de charactères en namespace javascript.
         */
        String.prototype.toNamespace = function(){
            if( this.toString().contains('.') ) {
                var asArray = this.toString().split('.');
                var namespacesBranch = window;
                var nsaal = asArray.length;
                for (index = 0; index < nsaal; ++index) {
                    namespacesBranch[asArray[index]] = namespacesBranch[asArray[index]] || {};
                    namespacesBranch = namespacesBranch[asArray[index]];
                }
            }
            else {
                var t = window[this.toString()];
                if( typeof t === ud ) {
                    window[this.toString()] = {};
                }
            }
        };
    }

    StringBuilder = function() {

        var words;

        var plugin = this;

        var init= function(){
            plugin.words = [];
            return plugin;
        };

        plugin.append = function(string) {
            plugin.words.push(string);
        };

        plugin.toString = function(separator){
            return plugin.words.join(separator);
        };

        init();

    };

})(window, document, String);
