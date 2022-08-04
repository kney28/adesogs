var carga=document.getElementById("carga");
var adesogs=document.getElementById("adesogs");
var index=document.getElementById("index");
setTimeout(function(){
	carga.classList.add('cerrar');//agregando clase al id carga
	carga.classList.add('ocultar');
	adesogs.classList.add('mostrar');
	index.classList.add('index');

}, 5500);
