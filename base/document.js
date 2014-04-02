;(function(window, document, ud){
    //<![CDATA[

    if ( !document.__proto__.getElementsByAttr ) {
        /**
         * Retourne une liste de DomNode qui possédent l'attribut attribute dans le contexte context.
         *
         * @param attribute L'attribut à rechercher
         * @param context   Si null le document complet sinon le contexte context.
         * @returns {Array} Une liste de DomNode
         */
        document.getElementsByAttr = function(attribute, context) {
            var nodeList    = ( context || document ).getElementsByTagName( '*' );
            var nodeArray   = [];

            for (var i = 0, node; node = nodeList[i]; i++) {
                if ( node.getAttribute( attribute ) ){
                    nodeArray.push( node )
                };
            }
            return nodeArray;
        };
    }

    /**
     * Recherche une liste de DOMNode selon la valeur d'un attribut attribute et ainsi que sa valeur value dans le contexte.
     * context.
     *
     * @param attribute Un attribut à rechercher
     * @param value     La valeur de l'attribut à recherché.
     * @param context   Si null le document complet sinon le contexte context.
     * @returns {Array} Une liste de DomNode
     */
    if ( !document.__proto__.getElementsByAttrValue ) {
        document.getElementsByAttrValue = function( attribute, value, context ) {
            var nodeList = document.getElementsByAttr( attribute, context );
            var nodeArray = [];
            for ( var i = 0 , node ; node = nodeList[i] ; i++ ) {
                if ( node.getAttribute( attribute ) == value ) {
                    nodeArray.push( node );
                }
            }
            return nodeArray;
        };
    }

    if ( !document.__proto__.addJs ) {
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
    }

    if ( !document.__proto__.AddIFrame ) {
        document.AddIFrame = function(src, id, config){
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src',src);
            iframe.setAttribute('id',id);
            document.body.appendChild(iframe);
        };
    }

    if ( !document.__proto__.addJs ) {
        document.addJs = function(href,id, media) {
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
    }

    //]]>
})(window, document, String);