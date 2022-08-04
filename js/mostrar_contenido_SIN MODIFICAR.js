$(document).ready(function() {
	
/*esta es la pagina que carga en el section automaticamente sin el evento click*/	
$.post("paginas/inicio.html", function(cargar){
		
		$("#principal").html(cargar);
		$("#aside").css({display: 'none'});
		$("#principal").css({width: '100%'});
		
		});	
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	
//Esta funcion me muestra una pagina externa html, php etc en un section div o cualquier parte de la pagina index
$("#inicio").click(function(){
	
	$.post("paginas/inicio.html", function(cargar){
		
		$("#principal").html(cargar);// este es mi section principal aqui se mostrara todas la paginas asociadas al menu
		
		});//Cierro la funcion cargar
	
	});//Cierro la funcion del evento click
    
$("#portafolio").click(function(){
	
	$.post("paginas/portafolio.html", function(cargar){		
		$("#principal").html(cargar);
		});
	
	});
	
$("#clientes").click(function(){
	
	$.post("paginas/clientes.html", function(cargar){
		$("#principal").html(cargar);	
		});
	
	});	

$("#normatividad").click(function(){
	$.post("paginas/normatividad.html", function(cargar){
		$("#principal").html(cargar);
		});
	});

$("#nosotros").click(function(){
	$.post("paginas/nosotros.html", function(cargar){
		$("#principal").html(cargar);
		});
	});

});//Cierro document ready