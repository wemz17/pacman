var lienzo,orientacion;

				// 40 posiciones Cuadradas Representan cada una 20px

var matriz = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
			  

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
	x:60,
	y:60,
	velocidad:20,
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
	var tecla = press.keyCode;
	
	var comprobar = comprobarMapa(tecla);
	console.log(comprobar);

	if (tecla == movimiento.UP && comprobar == true){
		player.y -= player.velocidad; 
	}
	if (tecla == movimiento.DOWN && comprobar == true){
		player.y += player.velocidad;
	}
	if (tecla == movimiento.RIGHT && comprobar == true){
		player.x += player.velocidad;
	}	
	if (tecla == movimiento.LEFT && comprobar == true){
		player.x -= player.velocidad;
	}

	orientacion=tecla;	
	dibujar();
	
}

// Muros de colision

function comprobarMapa(undo){
	var teclado=undo;

	var y=player.x/20;
	var x=player.y/20;

  	console.log(x+","+y+"="+matriz[x][y]);

	if ((teclado==movimiento.UP) && (matriz[x-1][y] == 1)){
		//console.log("Estado de la Casilla a mover: "+matriz[y][x+1]);
		return true;
	}
	if ((teclado==movimiento.DOWN) && (matriz[x+1][y] == 1)){
		return true;
	}
	if ((teclado==movimiento.LEFT) && (matriz[x][y-1] == 1)){
		return true;
	}
	if ((teclado==movimiento.RIGHT) && (matriz[x][y+1] == 1)){
		return true;
	}
 return false;
}


/*	if ((teclado==movimiento.UP) && (matriz[x][y-1] == 1)){
		//console.log("Estado de la Casilla a mover: "+matriz[y][x+1]);
		return true;
	}
	if ((teclado==movimiento.DOWN) && (matriz[x][y+1] == 1)){
		return true;
	}
	if ((teclado==movimiento.LEFT) && (matriz[x-1][y] == 1)){
		return true;
	}
	if ((teclado==movimiento.RIGHT) && (matriz[x+1][y] == 1)){
		return true;
	}
 return false;
}
*/

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

