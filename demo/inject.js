;(function(window, ud){

    /**
     * Déclaration namespace application
     * @type {{}}
     */
    window.Libre          = window.Libre || {};
    window.Libre.Settings = window.Libre.Settings || {};
    window.Libre.Plugins  = window.Libre.Plugins || {};

    if (window.jQuery) {
        jQuery().jquery;
    }

     new window.Libre.Plugins.Inject({
        js:[
            "http://www.inwebo.dev/bookmarklet/demo/bak.js"
        ],
        css:[
            "http://www.inwebo.dev/bookmarklet/style.css"
        ]
     }).onReady(function() {
        console.log( "Dependencies ready." );

     }).onError(function(){
        console.log( "Dependencies error." );
     });
// http://bookmarks.inwebo.net/index.php/categorie/Incoming/1

})(window);
