//<![CDATA[
'use strict';
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};

    /**
     * @param options
     * @constructor
     */
    Lp.StreamGetEmbed = function(url, options){

        var plugin = this;

        plugin.options = {};
        plugin.url = null;
        plugin.service = null;
        /**
         * construct
         * @returns {window.LibreJs.PluginName}
         */
        plugin.init = function(url, options) {
            plugin.options = options;
            plugin.url = url || window.location.href;
            plugin.service = streamRouter();
        };

        var streamRouter = function(){
            var result = {
                service:null,
                player:null
            };

            if(plugin.url.indexOf('youtube.') != -1)
            {
                var player = plugin.parsers.youtube();
                result.service = 'youtube';
                result.player = player;
                return result;
            }
            else if(plugin.url.indexOf('dailymotion.') != -1)
            {
                var player = plugin.parsers.dailymotion();
                result.service = 'youtube';
                result.player = player;
                return result;
            }
            else if(plugin.url.indexOf('soundcloud.') != -1)
            {
                var player = plugin.parsers.soundcloud();
                result.service = 'soundcloud';
                result.player = player;
                return result;
            }
            else if(plugin.url.indexOf('vimeo.') != -1)
            {
                var player = plugin.parsers.vimeo();
                result.service = 'vimeo';
                result.player = player;
                return result;
            }
        };

        plugin.parsers = {
            youtube : function()
            {
                var str = '<iframe width=\'420\' height=\'315\' src=\'' +
                    plugin.url+
                    '\' frameborder=\'0\' allowfullscreen></iframe>';
                str = str.replace('watch', 'embed');
                str = str.replace('?v=', '/');
                return str;
            },
            dailymotion:function()
            {
                var str = '<iframe frameborder=\'0\' width=\'320\' height=\'180\' src=\''+plugin.url+'\' allowfullscreen></iframe>';
                str = str.replace('video/', 'embed/video/');
                return str;
            },
            vimeo:function()
            {
                var str = '<iframe frameborder=\'0\' width=\'320\' height=\'180\' src=\''+plugin.url+'\' allowfullscreen></iframe>';
                str = str.replace('vimeo', 'player.vimeo');
                str = str.replace('.com/', '.com/video/');
                return str;
            },
            soundcloud:function()
            {
                var str = '<iframe width=\'100%\' height=\'450\' scrolling=\'no\' frameborder=\'no\' src=\'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/PLAY_LIST&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\'></iframe>';

                var nodes       = document.evaluate( '//html/head/meta[@property=twitter:app:url:ipad]', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
                var elt         = nodes.iterateNext ();
                var playlist    = elt.content;
                var array       = playlist.split(':');
                var playslitId  = array[array.length-1];
                str             = str.replace('PLAY_LIST', playslitId);
                return str;
            }
        };

        plugin.init(url, options);
    };
    var e = new Lp.StreamGetEmbed();
    console.log(e);

})(window, document);
//]]>
