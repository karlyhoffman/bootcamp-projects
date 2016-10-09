console.log('Linked');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var horses = [];

function Horse(addHorse, switchDirection) {
	//James wants you to change the horse styling everytime
	// UNICORN!!! "Use Glow Property"
		//Pops up on last level OR Easter Egg -- like if you click the horses in a certain order

	var xCoor = Math.floor(Math.random() * 370) + 90; // Random x coordinate = # from 90 to 460 
	var yCoor = Math.floor(Math.random() * 160) + 90; // Random y coordinate = # from 90 to 250

	this.addHorse = function() {
		var img = new Image();
		// img.onload = function(){
		// 	ctx.drawImage(img,xCoor,yCoor);
		// };
		img.onload = moveHorse;
		img.src = "images/evenSmallerHorse.png";   // load image
		horses.push(this);

		function moveHorse() {
		  ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
		  ctx.drawImage(img, xCoor,yCoor);   // draw image at current position
		  xCoor += 2;
		  yCoor += -2;
		  if (xCoor < canvas.width) requestAnimationFrame(moveHorse);    // loop
		};
	};

	this.switchDirection = function(){
		// this.on('click', function(){
		
		// });
	};

};

// Start with two horses
var horseOne = new Horse();
var horseTwo = new Horse();

horseOne.addHorse();
horseTwo.addHorse();

var horseThree = new Horse(); // Level 2
var horseFour = new Horse(); // Level 3
var horseFive = new Horse(); // Level 4
var horseSix = new Horse(); // Level 5
var horseSeven = new Horse(); // Level 6
var horseEight = new Horse(); // Level 7

// horseThree.addHorse();
// horseFour.addHorse();
// horseFive.addHorse();
// horseSix.addHorse();
// horseSeven.addHorse();
// horseEight.addHorse();





