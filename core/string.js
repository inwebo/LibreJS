//<![CDATA[
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
    String.prototype.hash = function() {
        var hash = 0, i, chr, len;
        if (this.length == 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
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

})(window, document, String);
