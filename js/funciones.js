var lienzo,orientacion;

var fondo = {
	fondoURL:"images/mapa.jpeg",
	fondoOK:false,
	x:0,
	y:0,
}

var player = {
	playerRightURL:"images/pacmanRIGHT.png",
	playerRightOK:false,
	playerLeftURL:"images/pacmanLEFT.png",
	playerLeftOK:false,
	playerUpURL:"images/pacmanUP.png",
	playerUpOK:false,
	playerDownURL:"images/pacmanDOWN.png",
	playerDownOK:false,
	x:100,
	y:350,
	velocidad:10,
}

var movimiento = {
	UP:38,
	DOWN:40,
	RIGHT:39,
	LEFT:37
}

function inicio(){
	var canvas = document.getElementById('cuadro');
	lienzo = canvas.getContext('2d');

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.fondoURL;
	fondo.imagen.onload = confirmarFondo;

	player.pacmanRIGHT = new Image();
	player.pacmanRIGHT.src = player.playerRightURL;
	player.pacmanRIGHT.onload = confirmarPlayer;

	player.pacmanLEFT = new Image();
	player.pacmanLEFT.src = player.playerLeftURL;
	player.pacmanLEFT.onload = confirmarPlayer;

	player.pacmanUP = new Image();
	player.pacmanUP.src = player.playerUpURL;
	player.pacmanUP.onload = confirmarPlayer;

	player.pacmanDOWN = new Image();
	player.pacmanDOWN.src = player.playerDownURL;
	player.pacmanDOWN.onload = confirmarPlayer;


	document.addEventListener("keydown",mover)

}

function mover(press){
	var tecla=press.keyCode;
	
	if (tecla == movimiento.UP){
		player.y -= player.velocidad;
	}
	if (tecla == movimiento.DOWN){
		player.y += player.velocidad;
	}
	if (tecla == movimiento.RIGHT){
		player.x += player.velocidad;
	}	
	if (tecla == movimiento.LEFT){
		player.x -= player.velocidad;
	}

	orientacion=tecla;
	dibujar();
	
}

function confirmarFondo(){
	fondo.fondoOK=true;
	dibujar();
}

function confirmarPlayer(){
	player.playerRightOK=true;
	player.playerLeftOK=true;
	player.playerDownOK=true;
	player.playerUp=true;
	dibujar();


}

function dibujar(){
	if (fondo.fondoOK == true){
		lienzo.drawImage(fondo.imagen,fondo.x,fondo.y);
	}

	var estadoMov = player.pacmanRIGHT;
	
	if ((player.playerRightOK && player.playerLeftOK && player.playerDownOK && player.playerUp) == true){
		
		if (orientacion == movimiento.RIGHT){
			estadoMov = player.pacmanRIGHT;
		}
		if (orientacion == movimiento.LEFT){
			estadoMov = player.pacmanLEFT;
		}
		if (orientacion == movimiento.UP){
			estadoMov = player.pacmanUP;
		}
		if (orientacion == movimiento.DOWN){
			estadoMov = player.pacmanDOWN;
		}
		
	lienzo.drawImage(estadoMov,player.x,player.y);
	}
	
}