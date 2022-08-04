$(document).ready(function() {
if(screen.width<=420){
	$(".ya,.grandioso,.paquete").css({"display":"none"});	
	$(".input-group").click(function(){
		if(screen.width<=420){
			$(window).scrollTop(1);
			$("#modal").css({"position":"absolute"});
		}
	$("#cerrar").click(function(){
		if(screen.width<=420){
			$("#modal").css({"position":"fixed"});
		}
		});
	});
	$("#c_contenedor,span").click(function(){
		$("#c_contenedor").css({"display":"none"});//Esto desactiva el display de la ventana modal
		$("#modal").css({"display":"none"});//Esto desactiva el display de la ventana modal
	
	});
	$(".pop").click(function(){
		$("#c_contenedor").css({"display":"block"});//Esto cambia el estado del display a encendido o activo
		$("#modal").css({"display":"block"});//Esto cambia el estado del display a encendido o activo
	});
	$(".pop1").click(function(){
			$("#c_contenedor").css({"display":"block"});
			$("#modal").css({"display":"block"});
	
	});
	$(".pop2").click(function(){
			$("#c_contenedor").css({"display":"block"});
			$("#modal").css({"display":"block"});
		
	});
	$(".pop3").click(function(){
			$("#c_contenedor").css	({"display":"block"});
			$("#modal").css({"display":"block"});
		
	});
}//cierro if
else { 
//**************Mostrando y ocultando la ventan modal atraves de clicks*****************
	$("#c_contenedor,span").click(function(){
		$("#c_contenedor").css({"display":"none"});//Esto desactiva el display de la ventana modal
		$("#modal").css({"display":"none"});//Esto desactiva el display de la ventana modal
		$(".ya,.grandioso,.paquete").css({"display":"none"});
	});
	$(".pop").click(function(){
		$("#c_contenedor").css({"display":"block"});//Esto cambia el estado del display a encendido o activo
		$("#modal").css({"display":"block"});//Esto cambia el estado del display a encendido o activo
	});
	$(".pop1").click(function(){
		$("#c_contenedor").css({"display":"block"});
		$("#modal").css({"display":"block"});
		$(".ya").css({"display":"inherit"});
	});
	$(".pop2").click(function(){
		$("#c_contenedor").css({"display":"block"});
		$("#modal").css({"display":"block"});
		$(".grandioso").css({"display":"inherit"});
	});
	$(".pop3").click(function(){
		$("#c_contenedor").css	({"display":"block"});
		$("#modal").css({"display":"block"});
		$(".paquete").css({"display":"inherit"});
	});
}//cierro else
//++++++++++++++Animando los label para que suba y baje+++++++++++++++++++++++++++++
/*declaro las varibles que van a contener los elementos asociados a los id nombrados, los cuales se usaran para 
hacer las condiciones que validaran si el input contienen informacion y asi parar la animacion*/
var nom=$("#nombre");
var email=$("#email");
var tel=$("#telefono");
var asunto=$("#asunto");
var msn=$("#textarea");
//**********************ANIMACION PARA LOS ELEMENTOS ASOCIADOS AL ID=nombre VAR=nom***************************

	$(".label1,#nombre").focusin(function(){
		$(".label1").css({"top":"0px","font-size":"70%"});
	});//cierro funcion focusin

	$(".label,#nombre").focusout(function(){

		if(nom.val().length>0){
		$(".label1").css({"top":"0px","font-size":"70%"});
			}
		else{$(".label1").css({"top":"40px","font-size":"100%"});}

	});//cierro funcion focusout
//**********************ANIMACION PARA LOS ELEMENTOS ASOCIADOS AL ID=email VAR=email***************************
	$(".label2,#email").focusin(function(){
		$(".label2").css({"top":"0px","font-size":"70%"});
		$("#email").css({"padding":"15px", "font-size":"100%"});//Esto es para que el placeholder se alinee con el padding general
	});//cierro funcion focusin

	$(".label2,#email").focusout(function(){

		if(email.val().length>0){
		$(".label2").css({"top":"0px","font-size":"70%"});
		$("#email").css({"font-size":"100%"});
			}
		else{$(".label2").css({"top":"40px","font-size":"100%"});
			 $("#email").css({"padding":"15px 90px", "font-size":"70%"});//Esto para que el placeholder no estorbe
			}

	});//cierro funcion focusout	
	
//**********************ANIMACION PARA LOS ELEMENTOS ASOCIADOS AL ID=telefono VAR=tel***************************
	$(".label3,#telefono").focusin(function(){
		$(".label3").css({"top":"0px","font-size":"70%"});
	});//cierro funcion focusin

	$(".label3,#telefono").focusout(function(){

		if(tel.val().length>0){
		$(".label3").css({"top":"0px","font-size":"70%"});
			}
		else{$(".label3").css({"top":"40px","font-size":"100%"});
			}

	});//cierro funcion focusout		

//**********************ANIMACION PARA LOS ELEMENTOS ASOCIADOS AL ID=asunto VAR=asunto***************************
	$(".label4,#asunto").focusin(function(){
		$(".label4").css({"top":"0px","font-size":"70%"});
		$("#asunto").css({"padding":"15px"});//Esto es para que el placeholder se alinee con el padding general
	});//cierro funcion focusin

	$(".label4,#asunto").focusout(function(){

		if(asunto.select()){
		$(".label4").css({"top":"0px","font-size":"70%"});
			}	

	});//cierro funcion focusout

//**********************ANIMACION PARA LOS ELEMENTOS ASOCIADOS AL ID=nombre VAR=nom***************************
    $(".label5").css({"top":"50px","left":"40%"});
	$(".label5,#textarea").focusin(function(){
		$(".label5").css({"top":"0px","font-size":"70%","left":"0px"});
	});//cierro funcion focusin

	$(".label5,#textarea").focusout(function(){

		if(msn.val().length>0){
		$(".label5").css({"top":"0px","font-size":"70%"});
			}
		else{$(".label5").css({"top":"50px","font-size":"100%","left":"40%"});}

	});//cierro funcion focusout

});//Cierro document

