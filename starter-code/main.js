var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; 

Comment out If statement
if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */

var board = document.getElementById('game-board');

var createBoard = function() {

	for (var i = 0 ; i < cards.length ; i++) {
		var cardElement = document.createElement('div');
		//Make class of newDiv "card"
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://pixabay.com/get/e835b9062afd083ed1584d05fb0938c9bd22ffd41db6154391f6c77ba7/elvis-1089299_1280.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://orig07.deviantart.net/977e/f/2014/253/a/7/beyonce_color_mini_by_nottiart-d7ynyft.jpg'>"; //queen
	}


	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};


var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("Is your name Cupid? Because you found a match!")
	} else {
		alert("Sorry, give it another try.")
	}
};

createBoard();

