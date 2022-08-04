<?php
//Enviar el mensaje de contacto

$destino=$_POST['email'];
$asunto="comentario";
$a="hola";
$comentario="Email: $_POST[email]
			comentario: $_POST[nombre]";



$headers = 'From: '.$destino."\r\n".
'Reply-To:'.$destino."\r\n".
'X-Mailer: PHP/'.phpversion();
			
mail($destino,$asunto,$comentario,$headers);

echo"Listo";

?>