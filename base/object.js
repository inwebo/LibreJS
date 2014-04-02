;(function(window, document, Array, ud){
    //<![CDATA[
    if (!Object.prototype.merge) {
        /**
         * Merge recursivement tous les arguments de la fonction dans un nouvel objet.
         * @returns {*}
         */
        Object.prototype.merge = function(){
            var obj = {}, i = 0, il = arguments.length, key;
            if (il === 0) {
                return this;
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
    }

    if ( !Object.prototype.isArray ){
        /**
         * L'objet est il un tableau ?
         * @returns {boolean}
         */
        Object.prototype.isArray = function() {
            return( this instanceof Array );
        };
    }
    //]]>
})(window, document, Array);