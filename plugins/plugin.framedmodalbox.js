//<![CDATA[
/**
 * Fenêtre modale légère par iframe.
 *
 * @author <inwebo@gmail.com>
 * @param frameSrc La source de l'iframe à intégrée dans la fenêtre courante
 * @thanks Christophe, refactoring de son code fait une nuit d'insomnie !
 */
var FramedLightBox = function( frameSrc ) {
    var plugin = this;

    plugin.frameSrc = frameSrc;

    plugin.container            = document.createElement("div");
    plugin.overlay              = document.createElement("div");
    plugin.lightBox             = document.createElement("div");
    plugin.lightBoxContainer    = document.createElement("div");
    plugin.loaderImg            = document.createElement("img");
    plugin.closeButton          = document.createElement("span");
    plugin.iframe               = document.createElement("iframe");
    plugin.isClosable           = true;

    /**
     * Constructeur
     * @returns {FramedLightBox}
     */
    var init = function() {
        setCloseButton();
        setOverlay();
        setContainer();
        setLightBoxContainer();
        setLoader();
        setLightBox();
        setIFrame();
        appendNodes();

        return plugin;
    };

    /**
     * Suppression de tous les éléments d'une modale box lors de la fermeture de celle ci.
     */
    plugin.close = function() {
        if( plugin.isClosable ){
            document.body.removeChild(document.getElementById('shLightBox'));
            document.body.removeChild(document.getElementById('shOverlay'));
            destruct();
        }
    };

    /**
     * Ajoute la lightbox dans le DOM.
     *
     * @param domNode Le domnode dans lequel l'ajout se fera. ex : document.body
     */
    plugin.appendTo = function( domNode ) {
        ( domNode || document.body ).appendChild(plugin.container);
        ( domNode || document.body ).appendChild(plugin.overlay);
    };

    /**
     * Affiche / Cache le loader
     */
    plugin.toggleLoader = function() {
        plugin.loaderImg.style.display  = "none";
        plugin.iframe.style.display     = "block";
    };

    /**
     * Attention, lors de suppression de l'objet du DOM, il semble nécessaire de supprimer également les evénements attachés.
     *
     * http://stackoverflow.com/questions/4337582/do-events-handlers-on-a-dom-node-get-deleted-with-the-node
     * @constructor
     */
    var destruct = function() {
        //@todo
    };

    /**
     * Prépare le container global
     */
    var setContainer = function() {
        plugin.container.setAttribute("id","shLightBox");
        plugin.container.setAttribute("style","position:fixed; margin-left:auto; top:0; left:0; z-index:9999; height:100%; width:100%; ");
        plugin.container.onclick = function(){
            plugin.close()
        };
    };

    /**
     * Prépare le domnode du container de la modale box
     */
    var setLightBoxContainer = function() {
        plugin.lightBoxContainer.setAttribute("style", "margin-left:auto; margin-right:auto; top:10%; height:100%; width:100%; position:absolute; ");
    };

    /**
     * Prépare le domnode du loader
     */
    var setLoader = function() {
        plugin.loaderImg.setAttribute("id", "ShLightLoaderImg");
        plugin.loaderImg.setAttribute("style", "height:30px; width:30px; margin-top:15%; margin-left:45%; float:left;");
        plugin.loaderImg.setAttribute("src", "//static.secureholiday.net/static/pip2/images/loader.gif");
    };

    /**
     * Prépare domnode overlay
     */
    var setOverlay = function() {
        plugin.overlay.setAttribute("id","shOverlay");
        plugin.overlay.setAttribute("style","height:100%; top:0; left:0; width:100%; opacity:0.85; background-color:#2b2b2b; z-index:9998; position:fixed");
        plugin.overlay.onclick = function(){
            plugin.close()
        };
    };

    /**
     * Prépare le domnode lightBox.
     */
    var setLightBox = function() {
        plugin.lightBox.setAttribute("style","margin-left:auto; margin-right:auto; background-color:black;  height:80%;  width:80%; ");
        plugin.lightBox.onmouseover = function() {
            plugin.isClosable = false;
        };

        plugin.lightBox.onmouseout = function() {
            plugin.isClosable = true;
        };
    };

    /**
     * Prépare le domnode iframe
     */
    var setIFrame = function() {
        plugin.iframe.setAttribute("id","ShIframe");
        plugin.iframe.setAttribute("style","height:100%; width:100%; display:none; border:10px solid black;");
        plugin.iframe.setAttribute("src",plugin.frameSrc);
        plugin.iframe.onload = function() {
            plugin.toggleLoader();
        };
    };

    /**
     * Prépare le domnode button.
     */
    var setCloseButton = function() {
        plugin.closeButton.onclick = function(){plugin.close()};
    };

    /**
     * Assemble (append) l'ensemble des domnodes représentant une modal box.
     */
    var appendNodes = function() {
        plugin.container.appendChild(plugin.lightBoxContainer);
        plugin.lightBox.appendChild(plugin.closeButton);
        plugin.lightBox.appendChild(plugin.loaderImg);
        plugin.lightBox.appendChild(plugin.iframe);
        plugin.lightBoxContainer.appendChild(plugin.lightBox);
    };

    init();
};
//]]>