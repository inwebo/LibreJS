//<![CDATA[
'use strict';
;(function(window, document, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};

    /**
     * @param string buffer
     * @constructor
     */
    Lp.ExecLive = function(buffer) {

        var plugin = this;

        plugin.buffer = "";
        plugin.array  = [];

        /**
         * construct
         * @returns {LibreJs.Plugins.ExecLive}
         */
        plugin.init = function(buffer) {
            plugin.buffer = buffer;
            normalize();
            return plugin;
        };

        var normalize = function () {
            plugin.buffer = plugin.buffer.replace(/\n+|\r+/g,'\n');
            plugin.array  = plugin.buffer.split("\n");
            plugin.array  = plugin.array.filter(function(n){ return n != "" });
        };

        plugin.getArray = function () {
            return plugin.array;
        };

        plugin.getLastElt = function () {
            return plugin.array[plugin.array.length-1];
        };

        plugin.init(buffer);
    };

})(window, document);
//]]>

var a = {"output":"PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.\n64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.017 ms\n64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.025 ms\n64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.025 ms\n\n--- 127.0.0.1 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 1998ms\nrtt min\/avg\/max\/mdev = 0.017\/0.022\/0.025\/0.005 ms\nExit status : 0\n"};
var b = {"output":"Loading pages (1\/6)\n[> ] 0%\r[======> ] 10%\r[=========> ] 16%\r[============> ] 20%\r[==============> ] 24%\r[=================> ] 29%\r[=================> ] 29%\r[==================> ] 31%\r[==========================> ] 44%\r[===========================> ] 46%\r[===============================> ] 53%\rlibpng warning: iCCP: known incorrect sRGB profile\n[=====================================> ] 62%\r[========================================> ] 68%\r[=============================================> ] 75%\r[==============================================> ] 77%\r[================================================> ] 80%\r[==================================================> ] 84%\r[===================================================> ] 86%\r[====================================================> ] 88%\r[============================================================] 100%\rCounting pages (2\/6) \n[============================================================] Object 1 of 1\rResolving links (4\/6) \n[============================================================] Object 1 of 1\rLoading headers and footers (5\/6) \nPrinting pages (6\/6)\n[> ] Preparing\r[==============================> ] Page 1 of 2\r[============================================================] Page 2 of 2\rDone \nExit status : 0\n"};