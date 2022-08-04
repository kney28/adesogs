<!doctype html>
<html>
<head>
<!--Sitio creado por KEVIN AGUDELO MOLINA-->
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
<meta name="description" content="Somos una empresa dedicada al desarrollo y auditoria de software, enfocada principalmente a brindar apoyo a las Eps, Ips y demás instituciones prestadoras de servicios de salud y responsables de rendir información de calidad al Ministerio de Salud y Protección Social sobre el registro individual de RIPS, las actividades de (PyP) y la presentación de informes según las resoluciones 4505 de 2012, Res. 2175 de 2015 y Res.0256 de 2016."/>

<link rel="shortcut icon" type="image/x-icon" href="img/favicon.png">
<link rel="stylesheet" href="iconos/iconos.css"/>
<link rel="stylesheet" href="estilos/index.css?1.0.3"/> 
<link rel="stylesheet" href="estilos/menu.css"/>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
<link rel="stylesheet" href="estilos/contacto.css?1.0.0"/>
<link rel="stylesheet" href="resoluciones/pantallas.css?1.0.3"/>
<link rel="stylesheet" href="estilos/inicio.css?1.0.0"/>
<link rel="stylesheet" href="estilos/portafolio.css?1.0.1"/>
<link rel="stylesheet" href="estilos/clientes.css?1.0.0"/>
<link rel="stylesheet" href="estilos/nosotros.css?1.0.2"/>
<link rel="stylesheet" href="estilos/normatividad.css?1.0.0">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/mostrar_contenido.js"></script>
<script src="js/menu_animacion.js"></script>
<script src="js/scroll_menu.js"></script>
<script src="js/contacto.js?1.0.1"></script>

<title>Adesogs</title>
</head>

<body id="index">
<?php
 //detectar si es un pc una tablet o un movil 
$tablet_browser = 0;
$mobile_browser = 0;
$body_class = 'desktop';
 
if (preg_match('/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
    $tablet_browser++;
    $body_class = "tablet";
}
 
if (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile)/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
    $mobile_browser++;
    $body_class = "mobile";
}
 
if ((strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/vnd.wap.xhtml+xml') > 0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) {
    $mobile_browser++;
    $body_class = "mobile";
}
 
$mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'], 0, 4));
$mobile_agents = array(
    'w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac',
    'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno',
    'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-',
    'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-',
    'newt','noki','palm','pana','pant','phil','play','port','prox',
    'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar',
    'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-',
    'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp',
    'wapr','webc','winw','winw','xda ','xda-');
 
if (in_array($mobile_ua,$mobile_agents)) {
    $mobile_browser++;
}
 
if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'opera mini') > 0) {
    $mobile_browser++;
    //Check for tablets on opera mini alternative headers
    $stock_ua = strtolower(isset($_SERVER['HTTP_X_OPERAMINI_PHONE_UA'])?$_SERVER['HTTP_X_OPERAMINI_PHONE_UA']:(isset($_SERVER['HTTP_DEVICE_STOCK_UA'])?$_SERVER['HTTP_DEVICE_STOCK_UA']:''));
    if (preg_match('/(tablet|ipad|playbook)|(android(?!.*mobile))/i', $stock_ua)) {
      $tablet_browser++;
    }
}
if ($tablet_browser > 0) {
// Si es tablet has lo que necesites
   //print 'es tablet';
}
else if ($mobile_browser > 0) {
// Si es dispositivo mobil has lo que necesites
   //print 'es un mobil';
}
/*else {
// Si es ordenador de escritorio has lo que necesites
//print 'es un pc, registro añadido...';
$ar= fopen("visitas_pc.txt","a") or die ("Problemas en la creacion del archivo");
fwrite($ar,"1 PC registrado".PHP_EOL);
fclose($ar);
//header('Location: index.html)');
} */ 
?>
<!--Aqui comienza el formulario de contacto, el formulario se abre mediante el llamado pop -->
<section id="c_contenedor" class="cont">
</section>
<div class="ya">¡ Que bien !<br>En Adesogs tenemos la herramienta perfecta para ti.</div>
<div class="grandioso">En Adesogs nos encargamos de brindarte<br>el mejor servicio.</div>
<div class="paquete">Solo falta que nos envíes tus datos<br>para que empieces a disfrutar de un<br>excelente servicio.</div>

<section id="modal" class="mod">
 <div>
 <span id="cerrar" class="icon-cerrar"></span><h1>CONTÁCTENOS</h1>
 </div>
 	<form action="<?php $_SERVER['PHP_SELF']; ?>" class="formulario" name="formulario_contato" method="post">
    
    <!--****************creado un grupo de inputs****************-->
    	<section class="input-group">
        <!--el label lu utilizo para que me al hacer click sobre el me haga focus en el input-->
        <label class="label1" for="nombre">Nombre y apellido:</label>
        <input type="text" id="nombre" name="nombre" required>    
        </section>
        <section class="input-group">
        <label class="label2" for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="ejemplo@server.com" required>        
        </section>
        <section class="input-group">
        <label class="label3" for="telefono">Telefono:</label>
        <input type="text" id="telefono" name="telefono" required>        
        </section>
        <section class="input-group">
        <label class="label4" for="asunto">Asunto:</label>
        <select name="asunto" id="asunto">
        	<option value="Pregunta" selected>Pregunta</option>
        	<option value="Sugerencia">Sugerencia</option>
            <option value="Queja">Queja</option>
            <option value="Reclamo">Reclamo</option>
        </select>        
        </section>
     <!--********creado un grupo textarea con dos clases*******-->
        <section class="input-group">
        <label class="label5" for="textarea">Mensaje:</label>
        <textarea name="mensaje" id="textarea" required></textarea>        
        </section>
     <!--******creado un grupo de checkbox con dos clases*******-->
        <a href="politica-privacidad.pdf" target="_new">políticas de tratamiento de la información</a>
      	<section class="input-group check">        
        <input type="checkbox" id="terminos" name="terminos" value="true" required>
        <label class="label6" for="terminos">Acepto los terminos y condiciones</label>
        </section>
        <section class="input-group">
       	<input type="submit" id="bt_submit" value="Enviar">
        </section>
<?php
if(isset($_POST["terminos"])){
  $nombre=$_POST["nombre"];
  $tel=$_POST["telefono"];
  $msn=$_POST["mensaje"];

  $para="contacto@adesogs.com";
  $remitente=$_POST["email"];
  $asunto=$_POST["asunto"];

  $cabeceras =  'From: '.$remitente."\r\n".
                'Reply-To: '.$remitente."\r\n".
                'X-Mailer: PHP/' . phpversion();
  $mensaje= 'Nombre: '.$nombre."\r\n" .
            'Telefono: '.$tel."\r\n" .
            $msn;
if(mail($para, $asunto, $mensaje, $cabeceras)) {
   //echo 'Correo enviado correctamente';
    } else {
    echo 'Error al enviar mensaje';
    }
}
?>
    </form>
  </section>

<!--++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->

	<header>
    <a href="#inicio" title="paginas/inicio.html"><img src="img/logomax.png" alt="Logo adesogs" class="logo"></a>
    <div class="menu_bar">
    <span class="bt_menu"><span class="icon-menu"></span>Menu</span>
    </div>  	
    	<nav>
        	<ul>
            	<li><a id="inicio" href="#inicio" title="paginas/inicio.html"><span class="icon-inicio"></span>Inicio</a></li>
                <li><a id="portafolio" href="#portafolio" title="paginas/portafolio.html"><span class="icon-portafolio"></span>Portafolio de Servicios</a></li>
                <li><a id="clientes" href="#clientes" title="paginas/clientes.html"><span class="icon-clientes"></span>Clientes</a></li>
                <li><a id="normatividad" href="#normatividad" title="paginas/normatividad.html"><span class="icon-normatividad"></span>Normatividad</a></li>
                <li><a id="nosotros" href="#nosotros" title="paginas/nosotros.html"><span class="icon-nosotros"></span>Nosotros</a></li>
                <li><a id="pop" class="pop"><span class="icon-contacto"></span>Contacto</a></li>                   	 
            </ul>
        </nav>        
    </header>
<section id="particles-js" class="particula">
</section>
<script src="js/particula/particles.js"></script>
<script src="js/particulas.js"></script>
<div id="contenedor">
<section id="base"> 
    <section id="principal">
    <img src="img/inicio.jpg" alt="Bienvenido a Adesogs S.A.S." class="oculto">
    <img src="img/animacion-adesogs5.gif" alt="fabrica-adesogs" class="oculto">
<!-- aqui se va a mostrar todas las paginas enlazadas al menu-->    
    </section>
    
    <aside id="aside">
    </aside>
</section>      
</div>
<footer>
<h5>SITIO</h5>
<div>ADESOGS S.A.S</div>
<section class="footer1">
<ul>
    <li>
        Dirección: Carrera 4 No. 2-40 Obando, Valle del Cauca, Colombia
    </li>
    <li>
        Celulares: 317 335 5339 – 316 285 7011 – 313 640 6661
    </li>
    <li>
        Email: contacto@adesogs.com – adesogs@gmail.com
    </li>
</ul>
</section>
<section class="footer2">
    <ul>
        <li><a id="inicio" href="#inicio" title="paginas/inicio.html">Inicio</a></li>
        <li><a id="portafolio" href="#portafolio" title="paginas/portafolio.html">Portafolio de servicios</a></li>
        <li><a id="clientes" href="#clientes" title="paginas/clientes.html">Clientes</a></li>
    </ul>
</section>
<section class="footer3">
    <ul>
        <li><a id="normatividad" href="#normatividad" title="paginas/normatividad.html">Normatividad</a></li>
        <li><a id="nosotros" href="#nosotros" title="paginas/nosotros.html">Nosotros</a></li>
        <li><a class="pop">Contacto</a></li>
    </ul>
</section>
<img src="img/logo-adesogs-blanco.png" alt="logo_adesogs_blanco">
<p>&nbsp; &copy; 2013-2017 Adesogs S.A.S.</p>
<p><span>Visitas del sitio: </span>
    <span class="visitas"><?php include("php/visitas.php");echo $total;?></span>
</p>
</footer>
</body>
</html>
