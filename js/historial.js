//@author marc & cristian



var busquedaLanzada=false;// para controlar se se ha echo ya la peticiÃ³n de buscar o es un boton atras.
var temporizador; // variable global que se utiliza para controlar el temporizador de revision de url
var velocidadTemporizador=1000;
var idHistorialActual=0; // proporciona historial de buscquedas
var idHistorialAnterior=0;
var idHistorialAnteriorIE=0;
var RUTA_EXTERNA= ObtenerRutaExterna();//'http://sintoner.com/';
var administrador=false;
//var historial=new Array(); Ya no hace falta


/**
 *  Este es el sistema que vigila las url's en busca de cambios.
 */
function GuardianUrl(){
	temporitzador=setTimeout("GuardianUrl()",velocidadTemporizador); //1000= 1 seg.
	//repite esa funcion cada tanto tiempo. para pararlo se utilizatria un clearTimeout(variable_de_tiempo)
	
	// consiguiendo el HASH de las rutas pagina principal e IFRAME.
		// HASH URL NORMAL CASO FirefoxF3	
		var urlActual = window.location.toString();
	    var busquedaUrl = window.location.hash.substr(1); // Nos devuelve el string de detras de la # de la url
		// HASH URL IFRAME CASO IE7,IE6
		var urlActualIframe = top.document.getElementById('historial').contentWindow.document.location; 
		var busquedaUrlIE = String(urlActualIframe.hash.substr(1)); // lo mismo pero del iframe.
	
	// Debuguear
	/*	var contadorHistori = history.length;
		var urlIframe= Obtenir("historial").src
		var texto= CrearTexto(contadorHistori +' hisotories ||urlIFRAME:'+urlIframe + ' || hasIFrame: '+busquedaUrlIE);
		ReemplazarContenidoNodo("contingutCarrito",texto);
	*/
		
	//siempre va a pasar que: el de la ur es menor o igual al Actual + Diferente al ultimo mirado (primer if detecta si ha cambiado la url en alguno de los 2 sistemas IE o FF3)
	//if( (busquedaUrlIE!= idHistorialAnteriorIE && idHistorialAnteriorIE > 0 ) || busquedaUrl<=idHistorialActual && idHistorialAnterior!=busquedaUrl && busquedaUrl>0 && idHistorialActual>0){ 	
	if( (busquedaUrlIE!= idHistorialAnteriorIE && idHistorialAnteriorIE !="" ) || busquedaUrl!=idHistorialActual && idHistorialAnterior!=busquedaUrl && busquedaUrl!="" && idHistorialActual!=""){
		if(!busquedaLanzada){
			//si no se ha lanzado la busqueda querrÃ¡ decir que es un botÃ³n atras o alante. 
			if(Obtenir('buscador')) { 
				//if ((busquedaUrlIE!= idHistorialAnteriorIE && idHistorialAnteriorIE > 0 )) {
				if ((busquedaUrlIE!= idHistorialAnteriorIE && idHistorialAnteriorIE !="" )) {
					//caso entramos por cambio en id por IFRAME IE
					//Obtenir('buscador').value=historial[busquedaUrlIE];
					Obtenir('buscador').value=urlDecode(busquedaUrlIE);
				}else {
					// caso normal, entramos por el hash de  la url superior FF3
					//Obtenir('buscador').value=historial[busquedaUrl];
					Obtenir('buscador').value=urlDecode(busquedaUrl);
				}
				
				Cargando();
				EnviarFormulari(RUTA_EXTERNA+'Articulo/resultadoBusquedaAjax.php','formularioBuscador',true);	 
			}
		}else{
			//este caso es para cuando existe un cambio de url, pero ha sido provocado por nosotros, no e sun boton atras! desactivamos el flag!
			busquedaLanzada=false;
		}
	}

	// despues de lanzar o no la busqueda igualo el cambio de las urls.
	if (busquedaUrl!="")idHistorialAnterior=busquedaUrl;
	//if (busquedaUrlIE!="")
	idHistorialAnteriorIE= busquedaUrlIE;
} 

/**
 *  urlDecode
 */

 // private method for UTF-8 decoding
   function urlDecode(url) {
   	
	var linea = new String();
	linea= url;
	linea=linea.replace(/%20*/gi,' '); //espacio Safari
	linea=linea.replace(/%C3%AD*/gi,"i"); // ï¿½
	linea=linea.replace(/%C3%B3*/gi,'o'); // ï¿½
	linea=linea.replace(/%C2%B*/gi,'?'); // ?
	
	
	return linea;
}; 

   
/**
 * Detectar IE, mediante objetos
 */
function esNavegadorIE(){
	
	// este componente solo tiene Internet Explorer apartir de la versiÃ³n 5.5
	if (window.ActiveXObject) {
		return true;
	}
	else{
		return false;
	}
}


/**
 * Existe un problema de denegacion de servicio por cross domain,
 * para ello es necesrio que lso javascrips esten todos llamados desde ficheros bajo el mismo protocolo y dominio,
 * distingue entre bisuarts.com y www.bisuarts.com
 * Esta funcion recoge los parametros de la url cargada para saber como hemos de cargar los escripts
 */

function ObtenerRutaExterna(){
	
 		//existe el problema de across domain denegation Script
		 var protocoloUrlPrincipal='http:';//pordefecto usamos http:
		 if (document.location.protocol =='https:') protocoloUrlPrincipal='https:'; // si exste https lo propagamos
		 var dominioUrlPrincipal=document.location.host;
		 //alert('url: '+protocoloUrlPrincipal+"//"+dominioUrlPrincipal)
		 return protocoloUrlPrincipal+"//"+dominioUrlPrincipal+'/';
}


function LimpiarUrl(){
	var urlSinId='';
	// buscando la #
	var urlActual= new String(window.location);
	urlSinId = urlActual.replace(/(\#[\w |\W ]{0,}){0,}/g,'');
	/* 
	 * Finalmente la expresion regular la he cambiado por esta otra donde:
	 * (\#[\w |\W ]{0,}){0,}
	 * incluimos un parentesis (\#[\w |\W ]{0,}) este agrupa  toda la espresion que contiene y permite darle un grado de repeticiones.
	 * asi remplazarï¿½amos ejemplos del estiolo #dsfksdf #sewerwe Quizas no sea necesario, pero por si acaso.
	 * ahora hemos introducido entre los primeros corchetes [\w | \W ] -> los espacios influyen y decien que puedan existir. 
	 * Aqui decimos que puede venir o caracteres alfanï¿½mercos o no alfa numericos que es lo mismo que decir que puedes poner cualquier cosas
	 * con unas repeticiones de 0 o mas... asi que # sola tambien se sustituiria.
	 * 
	 * Para aprender a probar expresiones regulares e smuy util esta pï¿½gina: http://regexpal.com/ donde se puede probar al vuelo las espresiones que queramos.
	 * 
	 * antigua expresion.
	 * en java escript toda regExp va entre dos / /
		en este caso a espresion completa es: \#[\w]{0,}
		donde  \# siginifica el caracter almohadilla que al ser especial necesita escaparse
		[\w] significa que el siguiente caracter es cualquier caracter alfanumï¿½rico
		{0,} que significa que la anterior expresion se repinte 0 o mas veces, asi
		[\w]{0,} significa cualquier cadena de caracteres desde la amoadilla
		
	*/
	
	//urlSinId = RUTA_EXTERNA;//window.location.hash.substr(0);
	//ReemplazarContenidoNodo("provas",'url:'+urlSinId);
	
	return urlSinId;
}
/* ***********************************************************************************
 * Obtenir: Consigue el objeto del id que se pase
 * 
 * ***********************************************************************************/


Obtenir = function (id) { // Retorna un elemento en base al id
   return document.getElementById(id);
};
