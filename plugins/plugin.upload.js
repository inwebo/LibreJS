//<![CDATA[
; (function(window, ud){
    var L   = window.LibreJs = window.LibreJs   || {};
    var Lp  = L.Plugins      = L.Plugins        || {};
    Function.prototype.bindToEventHandler = function bindToEventHandler() {
        var handler = this;
        var boundParameters = Array.prototype.slice.call(arguments);
        //create closure
        return function(e) {
            e = e || window.event; // get window.event if e argument missing (in IE)
            boundParameters.unshift(e);
            handler.apply(this, boundParameters);
        }
    };

    Lp.Files = {

        Upload : function(el){

            var plugin = this;
            plugin.dropzone = null;
            plugin.supported = false;
            plugin.options = {};



            var init = function (el) {
                plugin.supported = plugin.isValid();
                plugin.dropzone = el;
                addDropHandler();
            };

            plugin.isValid = function(){
                (window.FileReader) ? true : false;
            };

            var addDropHandler = function() {
                addEventHandler(plugin.dropzone, 'dragover', cancel);
                addEventHandler(plugin.dropzone, 'dragenter', cancel);
                addEventHandler(plugin.dropzone, 'drop', function (e) {
                    e = e || window.event; // get window.event if e argument missing (in IE)
                    if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

                    var dt    = e.dataTransfer;
                    var files = dt.files;
                    console.log(files);
                    for (var i=0; i<files.length; i++) {


                        var file = files[i];
                        var reader = new FileReader();

                        addEventHandler(reader, 'loadend', function(e, file) {
                            var bin           = this.result;
                                var list = document.createElement('ul');
                            var newFile       = document.createElement('div');
                            newFile.innerHTML = 'Loaded : '+file.name+' size '+file.size+' B';
                            list.appendChild(newFile);
                            var fileNumber = list.getElementsByTagName('div').length;
                            status.innerHTML = fileNumber < files.length
                                ? 'Loaded 100% of file '+fileNumber+' of '+files.length+'...'
                                : 'Done loading. processed '+fileNumber+' files.';

                            var img = document.createElement("img");
                            img.file = file;
                            img.src = bin;
                            list.appendChild(img);

                        }.bindToEventHandler(file)
                        );

                        reader.readAsDataURL(file);
                    }
                    return false;
                });
            }

            var addEventHandler = function addEventHandler(obj, evt, handler) {
                if(obj.addEventListener) {
                    // W3C method
                    obj.addEventListener(evt, handler, false);
                } else if(obj.attachEvent) {
                    // IE method.
                    obj.attachEvent('on'+evt, handler);
                } else {
                    // Old school method.
                    obj['on'+evt] = handler;
                }
            };

            var bindToEventHandler = function bindToEventHandler() {
                var handler = this;
                var boundParameters = Array.prototype.slice.call(arguments);
                //create closure
                return function(e) {
                    e = e || window.event; // get window.event if e argument missing (in IE)
                    boundParameters.unshift(e);
                    handler.apply(this, boundParameters);
                }
            };

            Function.prototype.bindToEventHandler = function bindToEventHandler() {
                var handler = this;
                var boundParameters = Array.prototype.slice.call(arguments);
                //create closure
                return function(e) {
                    e = e || window.event; // get window.event if e argument missing (in IE)
                    boundParameters.unshift(e);
                    handler.apply(this, boundParameters);
                }
            };

            var cancel = function(e){
                if (e.preventDefault) { e.preventDefault(); }
                return false;
            }

            init(el);
        }
    };



})(window);
//]]>