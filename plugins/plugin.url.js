; (function (window, document, ud) {

    Url = {
        /**
         * Retourne le protocle courante.
         * @returns {string}
         */
		getProtocol : function() {
			return location.protocol + "//";
		},

        /**
         * Retourne le nom de l'hôte courante.
         * @returns {string}
         */
		getHostName : function() {
			return location.hostname + ( location.port ? ':' + location.port : '');
		},
		
		getUri : function() {
			return location.pathname;
		},
		
		getQueryString : function() {
			var loc = window.location.search;
			if(loc.indexOf("?") != -1) {
				loc = loc.substr(1);
			}
			return loc;
		},
		
		get : function() {
            var url = this.getProtocol() + this.getHostName() + this.getUri();
            url += (this.getQueryString() !== "") ? "?" + this.getQueryString() : "" ;
			return url;
		},

        /**
         * @todo Revoir le cas ou plusieurs parametre sont présents dans l'url.
         * @returns {Array}
         */
		getParams : function() {
			var queryString = this.getQueryString();
            // Il y a t il plusieurs paramètres ?
			var paramsArray = ( queryString.indexOf("&") != -1 )? queryString.split('&') : queryString.split('=');
			var _return = new Array();
			for(var i = 0 ; i < paramsArray.length ; i++ ) {
                var paramArray = paramsArray[i].split( "=" );
                _return[paramArray[0]] = paramArray[1];
			};
			return ( _return.length > 0 ) ? _return : null;
		},
		
		getParamByKey : function( key ) {
			var array = this.getParams();
			for(var i=0; i<= array.length; i++ ) {
    			if( array[key] !== "undefined" ) {
                    return array[key];
    			}
			}
		},
		
		isValid : function (urlToTest) {
            var urlregex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            return urlregex.test(urlToTest);
        }

    };
	
})(window, document);