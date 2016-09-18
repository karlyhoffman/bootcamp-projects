var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* Comment out If statement
if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */

var gameBoard = document.getElementById('game-board');

var createBoard = function () {
	for (var i = 0 ; i < 4 ; i++) {
		var newDiv = document.createElement('div');
		//Make class of newDiv "card"
		newDiv.setAttribute('class', 'card');
		//Or is it this? newDiv.className = 'card';
		newDiv.appendChild(gameBoard);
	}
}

createBoard();




