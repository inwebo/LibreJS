//<![CDATA[
/**
 * Sotckage de données dans le navigateur, par session / permanent.
 */
; (function(window, ud){
    SessionStorage = {
        set : function(key,value, context) {
            var _context = context || window;
            _context.sessionStorage.setItem(key, value);
        },

        get : function(key, context){
            var _context = context || window;
            return _context.sessionStorage.getItem(key);
        },

        isCached : function(key, context) {
            var _context = context || window;
            return ( this.get(key, _context) !== null ) ? true : false;
        },

        isEnabled : function() {
            return   typeof (window.sessionStorage) === "object";
        },

        del : function(key, context) {
            var _context = context || window;
            _context.sessionStorage.removeItem(key);
        },

        clear : function(context) {
            var _context = context || window;
            _context.sessionStorage.clear();
        }
    };

    LocalStorage = {
        set : function(key, value, context) {
            var _context = context || window;
            _context.localStorage.setItem(key, value);
        },

        get : function(key, context){
            var _context = context || window;
            return _context.localStorage.getItem(key);
        },

        isCached : function(key, context) {
            var _context = context || window;
            return ( this.get(key, _context) !== null ) ? true : false;
        },

        isEnabled : function() {
            return   typeof (window.sessionStorage) === "object";
        },

        del : function(key, context) {
            var _context = context || window;
            _context.localStorage.removeItem(key);
        },

        clear : function(context) {
            var _context = context || window;
            _context.localStorage.clear();
        }

    };

    Storage = function( type, context ) {
        var plugin = this;
        this._type;
        this._context = context || window;

        var init = function() {
            switch(type) {
                default:
                case "session":
                    this._type = sessionStorage;
                    break;

                case "local":
                    this._type = localStorage;
                    break;
            }
        };

        plugin.enabled = function() {
            return typeof ( _context._type ) === "object";
        };

        plugin.isSet = function() {
            return ( this.get( key ) !== null ) ? true : false;
        };

        plugin.set = function(key, value) {
            this._context.this._type.setItem(key, value);
        };

        plugin.get = function(key) {
            this._context.this._type.getItem(key);
        };

        plugin.clear = function() {
            this._context.this._type.clear();
        };

        plugin.del = function(key) {
            this._context.this._type.removeItem(key);
        };

        init();

    };

    St = {
        set : function(key, value, context) {
            var _context = context || window;
            _context.localStorage.setItem(key, value);
        },

        get : function(key, context){
            var _context = context || window;
            return _context.localStorage.getItem(key);
        },

        isCached : function(key, context) {
            var _context = context || window;
            return ( this.get(key, _context) !== null ) ? true : false;
        },

        isEnabled : function() {
            return   typeof (window.sessionStorage) === "object";
        },

        del : function(key, context) {
            var _context = context || window;
            _context.localStorage.removeItem(key);
        },

        clear : function(context) {
            var _context = context || window;
            _context.localStorage.clear();
        }

    };
})(window);
//]]>