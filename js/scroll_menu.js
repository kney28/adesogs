$(document).ready(function(){
	var flag=false;//esta bandera lo que hace es que la fucion scroll solo se ejecute una vez y no sobrecargue el ordenador del cliente con la continua lectura del evento
	var scroll;
	var color1="rgb(90,70,80)";
	var color2="rgb(125,200,200)";
/*+++++++++funcion aHover creada para activar el hover in y el out css al pasa sobre el elemento "a"+++++++++++++++*/	
	function aHover (nav,colora,colorb){//3 parametros el id de "a" el color hoverIn y el color hoverOut
	var nav;
		$(nav).hover(In(),Out());//si el scroll es mayor que 90 se aplicara este estilo de hover sobre "#"
		function In(){//funcion cuando se hace hover sobre el elemento 
			$(nav).css({"background-color":colora,"font-weight":"bolder"});
			return In;
					}
		function Out(){//funcion cuando no se hace hover sobre el elemento
			$(nav).css({"background-color":colorb,"font-weight":"inherit"});
			return Out;
					}
			    }//cierro aHover
	/*Inicializo el hover para que funcione al cargar la pagina y no cuando ocurra el evento SCROLL*/
				aHover($("#inicio"),color1,"transparent");
				aHover($("#portafolio"),color1,"transparent");
				aHover($("#clientes"),color1,"transparent");
				aHover($("#normatividad"),color1,"transparent");
				aHover($("#nosotros"),color1,"transparent");
				aHover($("#pop"),color1,"transparent");
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/	
			
//creando el evento de scroll para que cambie el backgroud-color del nav y se active otro color del a:hover
$(window).scroll(function(){
	scroll= $(window).scrollTop();
	
	if(scroll>90){
//Este if hace que la imagen baje su tamaño cuando se hace scroll hacia abajo y aumente al hacer lo contrario, al mismo  tiempo cambia el color del header		
		if(!flag){//SCROLL TRUE
			/*$("header").css({"background-color":color1, "opacity":"0.96"});
			//LLAMAMOS LA FUNCION aHover Y LE PASAMOS COMO PARAMETRO EL EL ID DEL ELMENTO "a"
				aHover($("#inicio"),color1,color2);
				aHover($("#portafolio"),color1,color2);
				aHover($("#clientes"),color1,color2);
				aHover($("#normatividad"),color1,color2);
				aHover($("#nosotros"),color1,color2);
				aHover($("#pop"),color1,color2);*/				
			}//IF FLAG		
		flag=true;
		}//IF SCROLL
		
	else {//SCROLL FALSE
		/*if(flag){
			$("header").css({"background-color":"transparent"});
				aHover($("#inicio"),"#000","transparent");
				aHover($("#portafolio"),"#000","transparent");
				aHover($("#clientes"),"#000","transparent");
				aHover($("#normatividad"),"#000","transparent");
				aHover($("#nosotros"),"#000","transparent");
				aHover($("#pop"),"#000","transparent");
				}*///IF FLAG
					
		flag=false;
		}//ELSE SCROLL
	
	});//FUNCION SCROLL
	
});//DOCUMENT