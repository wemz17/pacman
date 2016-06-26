var lienzo;

var fondo = {
	fondoURL:"images/mapa.jpeg",
	fondoOK:false,
	x:0,
	y:0,
}

function inicio(){
	var canvas = document.getElementById('cuadro');
	lienzo = canvas.getContext('2d');

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.fondoURL;
	fondo.imagen.onload = confirmarFondo;
}

function confirmarFondo(){
	fondoOK=true;
	dibujar();
}

function dibujar(){
	if (fondoOK==true){
		lienzo.drawImage(fondo.imagen,fondo.x,fondo.y);
	}
}