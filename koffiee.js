let chosenText ;
let buttonChoose ;
let koffies = ['Milchkaffee','Kaffee','Kaffee groß','Cappuchino','Espresso','Espresso Doppelt','Espresso Machiato','Chai Latte','Matcha Green','Kakao/Heiße Schokolade','Latte-Machiato','Tee', 'Moccachino' ] ;
let counter = 0 ;
let roll ;
let randomRoll ;
let drinksList;
let listOfDrinks = [] ;

function initialize() {
	chosenText = document.getElementById('chosen') ;
	buttonChoose = document.getElementById('buttonChoose') ;
	drinksList = document.getElementById('drinksList') ;
	
	buttonChoose.addEventListener('click', doTheChoose) ;
	
	listDrinks() ;
	updateKoffies() ;
}

function listDrinks() {
	let cnt = 0 ;
	for(drink of koffies) {
		let buton = document.createElement('input')
		buton.value = drink ; 
		buton.name = drink ;
		buton.type = 'checkbox' ;
		buton.checked = true ;
		buton.id = cnt ;
		buton.style.width = '1.2rem' ;
		buton.style.height = '1.2rem' ;
		buton.style.marginRight = '1em' ;
		
		let butonLabel = document.createElement('label')
		butonLabel.htmlFor = cnt++ ;
		butonLabel.appendChild(document.createTextNode(drink));
		
		listOfDrinks.push( buton ) ;
		drinksList.appendChild( buton ) ;
		drinksList.appendChild( butonLabel ) ;
		drinksList.appendChild( document.createElement('br') ) ;
	}
}

function updateKoffies() {
	koffies = [] ;
	for(dronk of listOfDrinks) {
		if(dronk.checked)
			koffies.push(dronk.value) ;
	}
	console.log('new koffies:' + koffies) ;
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
	updateKoffies() ;
	randomRoll = Math.ceil((Math.random() * 10) + 50 ) ;
	reseto() ;
	//roll = undefined ;
	roll = setInterval(doRoll, 50) ;
}

window.addEventListener('DOMContentLoaded', initialize) ;
