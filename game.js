//------------------------inicio----------------------------//
var vidas = 1
var tempo = 10
var nivel = window.location.search
nivel = nivel.replace('?', '')

var tempomosca = 1500

if(nivel === 'normal'){
	tempomosca = 1500
}else if(nivel === 'dificil'){
	tempomosca = 1000
}else if(nivel === 'chucknorris'){
	tempomosca = 700
}


// ajustar janela automaticamente para criação do palco do jogo
function sizeAdjust(){
	largura = window.innerWidth
	altura = window.innerHeight

	// mostra o tamanho da janela
	// console.log(largura, altura)
}
sizeAdjust()
//-------------------------fim-----------------------------// 

var cronometro = setInterval(function() {

	tempo--

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


//--------------posicao randomica da mosca-----------------//
function randomPosition(){


	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove()

		if(vidas > 3){
			window.location.href = 'gameover.html'
		}else{
			document.getElementById('v' + vidas).src = 'coracao_vazio.png'
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) -200	
	var posicaoY = Math.floor(Math.random() * altura)	-200

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	// mostra a posição criada randomicamente
	// console.log(posicaoX, posicaoY)

	var mosca = document.createElement('img')
	mosca.src = 'mosca2.png'
	mosca.className = sizeChange() + ' ' + sideChange() 
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	document.body.appendChild(mosca)
	mosca.onclick = function(){
		this.remove()
	}


}
//------------------------fim-----------------------------//

//--------------Tamanho randômica da mosca-----------------//
function sizeChange(){
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
		case 0:
		return 'mosca1'
		case 1:
		return 'mosca2'
		case 2:
		return 'mosca3'
		default:
		return 'mosca3'
	}
}
//------------------------fim-----------------------------//

//--------------Tamanho randômica da mosca-----------------//
function sideChange(){
	var lado = Math.floor(Math.random() * 2)
	switch(lado){
		case 0: 
		return 'ladoA'
		case 1:
		return 'ladoB'
	}
}
//------------------------fim-----------------------------//