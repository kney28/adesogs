$(document).ready(listo);

var contador = 1;

function listo(){
	$(".bt_menu").click(function(){
		
		if(contador==1){
		$("nav").animate({
			left:'0%'
			
		});
			contador=0;	
		}
		else{
		$("nav").animate({
			left:'-100%'	
			});
			contador=1;
		}
		});
	$("#principal").click(function(){
		$("nav").animate({
			left:'-100%'	
			});
			contador=1;
	});
	$(".particula").click(function(){
		$("nav").animate({
			left:'-100%'	
			});
			contador=1;
	});
	
	} 
