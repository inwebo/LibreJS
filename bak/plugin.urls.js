; (function (window, document, String, ud) {

Url = {

    getLocation : function( uri ) {
        var uri = uri || null;
        var loc = (uri === null) ? window.location.search : uri;
        if(loc.indexOf("?") != -1) {
            loc = loc.substr(1);
        }
        return loc;
    },

    getParams : function() {
        var location = this.getLocation();
        var paramsArray = location.split('&');
        var _return = [];
        for(var i=0; i < paramsArray.length ; i++ ) {
            var params = paramsArray[i].split("=");
            _return[params[0]] = params[1];
        };
        return _return;
    },

    getParamsByKey : function( key, uri ) {
        var uri = uri || null;
        var loc = (uri === null) ? this.getLocation() : this.getLocation(uri);
        var array = this.getParams();
        for(var i=0; i<= array.length; i++ ) {
            if( array[key] !== "undefined") {
                return array[key];
            }
        }
    }

}

})(window, document, String);

// console.log(Url.getParamsByKey('lsg'));