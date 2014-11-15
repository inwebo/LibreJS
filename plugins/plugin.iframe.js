/**
 * Objet Iframe.
 *
 * (string)	src		: Une url, uri valide.
 * (string)	id		: Un attribut du DomNode courant UNIQUE.
 * (array)	dims	: Tableau d'entiers sous la forme [Largeur, Hauteur].
 * (string)	style	: L'inline style de l'Iframe.
 */
Iframe = function( src, id, name, dims, style ) {

	var plugin = this;
	
	var domNode = document.createElement( 'iframe' );
	
	plugin.src		= src;
	plugin.id		= id;
	plugin.name		= name;
	plugin.width	= dims[0] || 400;
	plugin.height	= dims[1] || 400;
	plugin.style	= style;

	/**
	 * Contructeur
	 */
	var init = function() {
		plugin.setSrc(plugin.src);
		plugin.setId(plugin.id);
		plugin.setWidth(plugin.width);
		plugin.setHeight(plugin.height);
		plugin.setStyle(plugin.style);
		domNode.setAttribute( 'charset', 'UTF-8' );
		
		return plugin;
	};

	/**
	 * Retourne le DomNode correctement configuré.
	 */
	plugin.get = function() {	
		return domNode;
	};

	/**
	 * (string) src : Url, uri valide.
	 */
	plugin.setSrc = function( src ) {
		domNode.setAttribute('src', src);
	};	
	
	/**
	 * (string) name : Un nom unique.
	 */
	plugin.setName = function( name ) {
		domNode.setAttribute('name', name);
	};	
	
	/**
	 * (int) width : Largeur souhaitée de l'iframe
	 */
	plugin.setWidth = function( width ) {
		domNode.setAttribute('width', width);
	};
	
	/**
	 * (int) height : Hauteur souhait�e de l'iframe
	 */
	plugin.setHeight = function( height ) {
		domNode.setAttribute('height', height);	
	};	
	
	/**
	 * (string) height : Hauteur souhait�e de l'iframe
	 */
	plugin.setStyle = function( style ) {
		domNode.setAttribute('style', style);	
	};
	
	/**
	 * (string) id : Un id unique, si l'id est déjà présent dans le DOM alors soul�ve une exception.
	 */
	plugin.setId = function( id ) {
		if( isValidId( id ) ) {
			domNode.setAttribute( 'id', id);
		}
		else {
			//throw new Exception( 'Id ' + id + ' already present into current DOM' );
		}
	};
	
	/**
	 * (string) id : L'id � test�, retourne true si l'id n'est pas d�j� pr�sent dans le DOM, sinon false.
	 */
	var isValidId = function( id ) {
		return ( document.getElementById( id ) === null ) ? true : false ;
	};
	
	/**
	 * (string)	src		: Une url, uri valide.
	 */
	plugin.setSrc = function( src ) {
		domNode.setAttribute( 'src' , src );
	};
	
	/**
	 * Ajoute dans le DomNode container l'iframe courante.
	 *
	 * (DomNode) container : Le DomNode valide accueillant l'Iframe.
	 */
	plugin.appendTo = function( container ) {
		container.appendChild( domNode );
	};
	
	/**
	 * Constructeur
	 */
	init();
};

IframeTools = {

	/**
	 * Récupération du body de l'Iframe courante.
	 */
	getBody : function(iframe) {
		// FF
		if( iframe.contentDocument !== null ) {
			return iframe.contentDocument.getElementsByTagName( 'body' )[0];
		}
		// IE
		else if( iframe.contentWindow !== null ) {
			return iframe.contentWindow.document.getElementsByTagName( 'body' )[0];
		}
	}

};

// Widget
// var iframe = new Iframe( 'http://bookmarks.inwebo.net', 'Iframe', [ 600, 600 ] );
// iframe.appendTo( window.document.body );

//var iframeBody = IframeTools.getBody( document.getElementById('Iframe') );



/*
    var xdomainIframe = new Iframe( 'http://192.168.1.112:8080/CTV.includer/', 'XdomainIframe', [ 50, 50 ] );
    xdomainIframe.appendTo(iframeBody);
*/
