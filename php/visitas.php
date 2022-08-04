<?php
$fecha=date("y-m-d");
$archivo="visitas.txt";
$abre = fopen($archivo, "r"); 
// Leemos el contenido del archivo 
$total = fread($abre, filesize($archivo)); 
// Cerramos la conexión al archivo 
fclose($abre);
$abre=fopen($archivo, "w");
$total=$total+1;
fwrite($abre, $total); 
fclose($abre); 
?>