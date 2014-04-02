/**
 * @author : <hannotin_julien@yahoo.fr>
 */
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
		}

    };
	
})(window, document);