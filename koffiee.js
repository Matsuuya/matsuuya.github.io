var chosenText ;
var buttonChoose ;
var koffies = ['Milchkaffee','Kaffee','Kaffee groß','Cappuchino','Espresso','Espresso Doppelt','Espresso Machiato','Chai Latte','Matcha Green','Kakao/Heiße Schokolade','Latte-Machiato','Tee', 'Moccachino' ] ;
var counter = 0 ;
var roll ;
var randomRoll ;

function initialize() {
	chosenText = document.getElementById('chosen') ;
	buttonChoose = document.getElementById('buttonChoose') ;
	
	buttonChoose.addEventListener('click', doTheChoose) ;
}

function doRoll() {
	chosenText.innerText = koffies[counter++ % koffies.length] ;
	console.log('random roll: '+randomRoll+', counter: '+counter) ;
	if (counter > randomRoll) {
		reseto() ;
	}
}

function reseto() {
	if (roll)
		clearInterval(roll) ;
	roll = undefined ;
	counter = 0 ;
	
}

function doTheChoose() {
	randomRoll = Math.ceil((Math.random() * 10) + 50 ) ;
	reseto() ;
	//roll = undefined ;
	roll = setInterval(doRoll, 50) ;
}

window.addEventListener('DOMContentLoaded', initialize) ;
