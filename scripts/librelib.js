/**
 * Ud est un alias de undefined.
 */
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

    if (!Object.prototype.isArray) {
        Object.prototype.isArray = function() {
            return( this instanceof Array );
        }
    }

    /**
     * Ajoute un noeud script dans <head>
     * @param src string Source valide
     * @param id string un id unique
     */
    document.addJs = function( src, id, callback ) {
        // dom + handler + src
        var js = document.createElement('script');
        document.getElementsByTagName('head')[0].appendChild(js);

        ( id !== null ) ? js.setAttribute('id', id) : null;
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', src);
        js.isReady = false;
        // alert state change
        js.onreadystatechange = function () {
            if (js.readyState == 'complete') {
                // IE
                //alert('JS onreadystatechange fired');
                js.isReady = true;
            }
        }
        js.onload = function () {
            // Others
            //alert('JS onload fired');
            js.isReady = true;
        }
        //console.log('JS loader : '+js.readyState);

        return js;
    };

    document.AddIFrame = function(src, id, config){
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src',src);
        iframe.setAttribute('id',id);
        document.body.appendChild(iframe);
    };

    document.addCss = function(href,id, media) {
        var css = document.createElement('link');
        document.getElementsByTagName('head')[0].appendChild(css);
        css.readyState = false;
        css.setAttribute('type', 'text/css');
        css.setAttribute('id', id);
        css.setAttribute('href', href);
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('media', media);
        css.isReady = false;
        css.onreadystatechange = function () {
            console.log(css.readyState);
            if (css.readyState == 'complete') {
                // IE
                //alert('CSS onreadystatechange fired');
                css.isReady = true;
            }
        }
        css.onload = function () {
            // Others
            //alert('CSS onload fired');
            css.isReady = true;
        }
        return css;
    }

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

})(window, document, String);

