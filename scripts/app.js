console.log('Linked');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lives = 3; 
var score = 0;
var level = 1;


var horses = [];

var img = new Image();
img.src = "images/evenSmallerHorse.png";

var img2 = new Image();
img2.src = "images/evenSmallerHorse.png";



function horseImageDraw(horse, image){
	image.onload = horse.addHorse(image);
}

function Horse() {
	horses.push(this);
	var base = this;

	this.xCoor = (Math.floor(Math.random() * 370) + 90), 
	this.yCoor = (Math.floor(Math.random() * 160) + 90),

	this.randomXDirection = (Math.random() * 2 - 1) * 2, 
	this.randomYDirection = (Math.random() * 2 - 1) * 2,

 	this.addHorse = function(image) {
 		ctx.drawImage(image, base.xCoor, base.yCoor); 
	},

	this.horsePath = function(){
		base.xCoor += base.randomXDirection;
		base.yCoor += base.randomYDirection;
	},

	this.currentXCoorMax = function(){
		return base.xCoor + 55;
	},
	this.currentYCoorMax = function(){
		return base.yCoor + 50;
	},
	this.switchDirectionsListener = function() {
		canvas.addEventListener('click', function(e){
			var trueX = e.pageX - ctx.canvas.offsetLeft;
			var trueY = e.pageY - ctx.canvas.offsetTop;
			// console.log(trueX);
			// console.log(trueY);
			if ( trueX >= base.xCoor
				&& trueX <= base.currentXCoorMax()
				&& trueY >= base.yCoor
				&& trueY <= base.currentYCoorMax()
			   ) {
				base.randomXDirection *= -1 ;
				base.randomYDirection *= -1 ;

				score++;
				document.getElementById("scoreText").innerHTML = score;
				checkLevel();				
			};
		});
	},

	this.checkBound = function(){
		if (base.xCoor < canvas.width && base.yCoor < canvas.height
			&& base.yCoor > -61 && base.xCoor > -55) { 
			return true 
		}
		// lose life if not within canvas borders:
		else {
			// Remove out-of-bounds horse from array, lose life
			for (var i = 0; i < horses.length; i++) {
				if (horses[i] === base) {
					var index = horses.indexOf(base)
					horses.splice(index, 1);
					lives--
					document.getElementById("livesText").innerHTML = lives;
				};
			};
		};
	}
};


// Start game with two horses 
var horseOne = new Horse();
var horseTwo = new Horse();
horseOne.switchDirectionsListener();
horseTwo.switchDirectionsListener();


function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	horseImageDraw(horseOne, img);
	horseImageDraw(horseTwo, img2);
	horseOne.horsePath()
	horseTwo.horsePath()

	horseOne.checkBound();
	horseTwo.checkBound();

	// console.log(horses);

	// Change to number of lives, once levelUp() is working
	if (horses.length > 0) {
		window.requestAnimationFrame(animate)
	} else {
		// document.getElementById("livesText").innerHTML = "GAME OVER."
	};

};
animate();



function checkLevel() {
	if ( score === 10 ){
		// Level 2
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseThree = new Horse();
		drawHorseImage(horseThree);
		horseThree.switchDirectionsListener();

	} else if ( score === 20 ){
		// Level 3
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseFour = new Horse();
		drawHorseImage(horseFour);
		horseFour.switchDirectionsListener();

	} else if ( score === 30 ){
		// Level 4
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseFive = new Horse();
		drawHorseImage(horseFive);
		horseFive.switchDirectionsListener();

	} else if ( score === 40 ){
		// Level 5
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseSix = new Horse();
		drawHorseImage(horseSix);
		horseSix.switchDirectionsListener();

	} else if ( score === 50 ){
		// Level 6
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseSeven = new Horse();
		drawHorseImage(horseSeven);
		horseSeven.switchDirectionsListener();

	} else if ( score === 60 ){
		// Level 7
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseEight = new Horse();
		drawHorseImage(horseEight);
		horseEight.switchDirectionsListener();
	}
};



// Notes:

// Console.Log Coordinates Clicked
// canvas.addEventListener('click', function(e){
// 		var trueX = e.pageX - ctx.canvas.offsetLeft;
// 		var trueY = e.pageY - ctx.canvas.offsetTop;
// 		console.log(trueX);
// 		console.log(trueY);
// });

