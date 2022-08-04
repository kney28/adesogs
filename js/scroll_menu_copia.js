$(document).ready(function(){
	var flag=false;//esta bandera lo que hace es que la fucion scroll solo se ejecute una vez y no sobrecargue el ordenador del cliente con la continua lectura del evento
	var scroll;
	var alt;
//creando el evento de scroll para que se esconda el logo

$(window).scroll(function(){
	scroll= $(window).scrollTop();
	
	if(scroll>90){
//Este if hace que la imagen baje su tamaño cuando se hace scroll hacia abajo y aumente al hacer lo contrario, al mismo tiempo cambia el color del header		
		if(!flag){
			$("header nav").css({"background-color":"#000", "opacity":"0.9"});
				$("#inicio").hover(In(),Out());//si el scroll es mayor que 90 se aplicara este estilo de hover sobre "#"
				function In(){//funcion cuando se hace hover sobre el elemento 
					$("#inicio").css({"background-color":"#ccc"});
					return In;
					}
				function Out(){//funcion cuando no se hace hover sobre el elemento
					$("#inicio").css({"background-color":"#000"});
					return Out;
					}
					
			}		
		flag=true;
		}
		
	else{
		if(flag){
			$("header nav").css({"background-color":"transparent"});
			$("#inicio").hover(In(),Out());
			function In(){
			$("#inicio").css({"background-color":"#000"});
			return In;
			}
			function Out(){
				$("#inicio").css({"background-color":"transparent"});
				return Out;
				}
			}		
		flag=false;
		}
	
	});
	
});