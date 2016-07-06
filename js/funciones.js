var matriz = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 40 posiciones Cuadradas Representan cada una 20px
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
			  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
			  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
			  [0,1,1,1,2,1,2,1,2,1,2,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
			  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
			  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var lienzo,orientacion,posicion;
var contador;			  

var fondo = {
	fondoURL:"images/mapa.jpeg",
	fondoOK:false,
	x:0,
	y:0,
}

var pastillas ={
	pastillasURL:"images/pastilla.png",
	pastillaOK:false,
	x:0,
	y:0,
	cantidad:0,
}

var muros ={
	murosURL:"images/muros.png",
	murosOK:false,
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
	
	x:20,
	y:400,
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

	contador=document.getElementById('contador');

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.fondoURL;
	fondo.imagen.onload = confirmarFondo;

	pastillas.imagen= new Image();
	pastillas.imagen.src=pastillas.pastillasURL;
	pastillas.imagen.onload=confirmarPastilla;

	muros.imagen=new Image(),
	muros.imagen.src=muros.murosURL;
	muros.imagen.onload=confirmarMuros;

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

	if (tecla == movimiento.UP && comprobar == 1){
		player.y -= player.velocidad; 
	}
	if (tecla == movimiento.DOWN && comprobar == 1){
		player.y += player.velocidad;
	}
	if (tecla == movimiento.RIGHT && comprobar == 1){
		player.x += player.velocidad;
	}	
	if (tecla == movimiento.LEFT && comprobar == 1){
		player.x -= player.velocidad;
	}

	orientacion=tecla;	
	dibujar();
	
}

//  ---------   Muros de colision   ----------

function comprobarMapa(undo){
	var teclado=undo;

	var y=player.x/20;
	var x=player.y/20;

  	console.log(x+","+y+"="+matriz[x][y]);

	if ((teclado==movimiento.UP) && (matriz[x-1][y] == 1)){	
		return 1;
	}
	if ((teclado==movimiento.DOWN) && (matriz[x+1][y] == 1)){
		return 1;
	}
	if ((teclado==movimiento.LEFT) && (matriz[x][y-1] == 1)){
		return 1;
	}
	if ((teclado==movimiento.RIGHT) && (matriz[x][y+1] == 1) || (matriz[x][y+1] == 2)){
		
			if (matriz[x][y+1] == 2){
				pastillas.cantidad--;
				matriz[x][y+1]=1;

		}
		return 1;
	}
 return 0;
}
 // ------------  CONFIRMACIONES DE IMAGENES -------------------
function confirmarMuros(){
	muros.murosOK=true;
	dibujar();
}


function confirmarFondo(){
	fondo.fondoOK=1;
	dibujar();
}

function confirmarPastilla(){
	pastillas.pastillaOK=true;
	dibujar();
}

function confirmarPlayer(){
	player.playerRightOK=true;
	player.playerLeftOK=true;
	player.playerDownOK=true;
	player.playerUp=true;
	dibujar();
}

function scanMap(invoc){
	var invocar=invoc;
	var i=0;
	var v=0;
	if (invocar=="balones"){
		var numero=0;
		for ( i=0; i< 40;i++){
			for ( v=0; v< 40;v++){
				if (matriz[i][v]==2){
					pastillas.x=i*20;
					pastillas.y=v*20;
					//alert("encontre pastilla por aqui en posicion  ("+ i+","+v +")");
					//pastillas.cantidad=pastillas.cantidad;
					numero++;
					lienzo.drawImage(pastillas.imagen,pastillas.y,pastillas.x+30);

				}
			}
		}
		pastillas.cantidad=numero
	}
	if (invocar=="muros"){
		for (i=0; i< 40;i++){
			for ( v=0; v< 40;v++){
				if (matriz[i][v]==0){
					muros.x=i*20;
					muros.y=v*20;
						
					lienzo.drawImage(muros.imagen,muros.y,muros.x);

				}
			}
		}
	}

}


// Funcion para Dibujar cuando ya todo esta comprobado
function dibujar(){
	

	if (fondo.fondoOK == true){
		lienzo.drawImage(fondo.imagen,fondo.x,fondo.y);
	
	}

	if (muros.murosOK == true){
			
			
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
	if (pastillas.pastillaOK == true){
			
		scanMap("balones");	
	}
	

	contador.innerText=pastillas.cantidad;
}

