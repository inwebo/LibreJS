;(function(window, document, String, ud){
    if (!String.prototype.contains) {
        /**
         * La chaine contient elle la sous chaine string
         * @param string La chaine à tester.
         * @returns {boolean}
         */
        String.prototype.contains = function(string) { return this.indexOf(string) != -1; };
    }

    if (!String.prototype.toNamespace) {
        /**
         * Convertis une chaine en namespaces.
         */
        String.prototype.toNamespace = function(){
            if( this.toString().contains('.') ) {
                var asArray          = this.toString().split('.');
                var namespacesBranch = window;
                var nsaal            = asArray.length;
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

})(window, document, String);
