$(document).ready(function() {
var jash = window.location.hash;
	if (jash!= "" && jash!= "#inicio" && jash!= "#portafolio" && jash!= "#clientes" && jash!= "#normatividad" && jash!= "#nosotros")
		{/*alert("ya esta aqui 1");*/}
	else{
    // comprobamos si existe un hash valido
   if(jash){
      // si existe buscamos el enlace que contiene ese hash en el href y cojemos su atributo "title"
      var href = $("a[href="+jash+"]").attr("title");
      //alert("aqui"+href);    
     // cargamos la página que se solicita vía hash
      $.post(href,function(cargar){
        $("#principal").html(cargar);

    	});
	}else{
	/*esta es la pagina que carga en el section automaticamente sin el evento click*/	
		var href = "#inicio";                 
		history.replaceState(1, null, href);
		$.post("paginas/inicio.html", function(cargar){
		$("#principal").html(cargar);
		$("#aside").css({display: 'none'});
		$("#principal").css({width: '100%'});

		});
	}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	
//Esta funcion me muestra una pagina externa html, php etc en un section div o cualquier parte de la pagina index
$("#inicio").click(function(){
	var href = "#inicio";                 
	history.pushState(1, null, href);
	$.post("paginas/inicio.html", function(cargar){
		
		$("#principal").html(cargar);// este es mi section principal aqui se mostrara todas la paginas asociadas al menu
		
		});//Cierro la funcion cargar
	
	});//Cierro la funcion del evento click
    
$("#portafolio").click(function(){
	var href = "#portafolio";                 
	history.pushState(2, null, href);
	$.post("paginas/portafolio.html", function(cargar){		
		$("#principal").html(cargar);
		});
	
	});
	
$("#clientes").click(function(){
	var href = "#clientes";                 
	history.pushState(3, null, href);
	$.post("paginas/clientes.html", function(cargar){
		$("#principal").html(cargar);	
		});
	
	});	

$("#normatividad").click(function(){
	var href = "#normatividad";                 
	history.pushState(4, null, href);
	$.post("paginas/normatividad.html", function(cargar){
		$("#principal").html(cargar);
		});
	});

$("#nosotros").click(function(){
	var href = "#nosotros";                 
	history.pushState(5, null, href);
	$.post("paginas/nosotros.html", function(cargar){
		$("#principal").html(cargar);
		});
	});
}//fin else

});//Cierro document ready
window.addEventListener("popstate", function() {
  	jash = window.location.hash;
if (jash!= "" && jash!= "#inicio" && jash!= "#portafolio" && jash!= "#clientes" && jash!= "#normatividad" && jash!= "#nosotros") 
		{/*alert(jash+" ya esta aqui 2");*/}
else{
    // comprobamos si existe un hash valido
   if(jash){
      // si existe buscamos el enlace que contiene ese hash en el href y cojemos su atributo "title"
      var href = $("a[href="+jash+"]").attr("title");     
     // cargamos la página que se solicita vía hash
   }


      getContent(href, false);
    }
    });

function getContent(url, addEntry) {
        $.get(url)
        .done(function( data ) {
             
            // Updating Content on Page
            $('#principal').html(data);
             
            if(addEntry == true) {
                // Add History Entry using pushState
                history.pushState(null, null, url); 
            }
             
        });
    }
