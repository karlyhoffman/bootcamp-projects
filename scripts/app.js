console.log('Linked');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//James wants you to change the horse styling everytime
// UNICORN!!! "Use Glow Property"
	//Pops up on last level OR Easter Egg = happen to click horses in a certain order

var horses = [];

var img = new Image();
img.src = "images/evenSmallerHorse.png";

var lives = 3;   // Try to have icons to represent each life
var score = 0;
var level = 1;

// Console.Log Coordinates Clicked
// canvas.addEventListener('click', function(e){
// 		var trueX = e.pageX - ctx.canvas.offsetLeft;
// 		var trueY = e.pageY - ctx.canvas.offsetTop;
// 		console.log(trueX);
// 		console.log(trueY);
// });

function horseImageDraw(horse){
	img.onload = horse.animate;
};

function Horse() {
	horses.push(this);
	var base = this;
	this.xCoor = (Math.floor(Math.random() * 370) + 90), 
	this.yCoor = (Math.floor(Math.random() * 160) + 90),

	this.randomXDirection = (Math.random() * 2 - 1) * 2, 
	this.randomYDirection = (Math.random() * 2 - 1) * 2,

	this.moveHorse = function() {
		ctx.save();
		ctx.clearRect(0, 0, canvas.width, canvas.height);  
		base.xCoor += base.randomXDirection;
		base.yCoor += base.randomYDirection;
		ctx.drawImage(img, base.xCoor, base.yCoor);
		ctx.restore();
		// console.log(base.xCoor, base.yCoor)
 	},
 	this.animate = function(){
		base.moveHorse();
		// animate if within canvas borders:
		if (base.xCoor < canvas.width && base.yCoor < canvas.height
			&& base.yCoor > -57 && base.xCoor > -55) {
			window.requestAnimationFrame(base.animate);
		} 
		// lose life if not within canvas borders:
		else {
			lives--;
			document.getElementById("livesText").innerHTML = lives;
		};
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
	} 

};

var horseOne = new Horse();
var horseTwo = new Horse();

horseImageDraw(horseOne);
horseOne.switchDirectionsListener();

horseImageDraw(horseTwo);
horseTwo.switchDirectionsListener();


function checkLevel() {
	if ( score === 10 ){
		// Level 2
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseThree = new Horse();
		horseImageDraw(horseThree);
		horseThree.switchDirectionsListener();

	} else if ( score === 20 ){
		// Level 3
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseFour = new Horse();
		horseImageDraw(horseFour);
		horseFour.switchDirectionsListener();

	} else if ( score === 30 ){
		// Level 4
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseFive = new Horse();
		horseImageDraw(horseFive);
		horseFive.switchDirectionsListener();

	} else if ( score === 40 ){
		// Level 5
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseSix = new Horse();
		horseImageDraw(horseSix);
		horseSix.switchDirectionsListener();

	} else if ( score === 50 ){
		// Level 6
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseSeven = new Horse();
		horseImageDraw(horseSeven);
		horseSeven.switchDirectionsListener();
		
	} else if ( score === 60 ){
		// Level 7
		level++;
		document.getElementById("levelText").innerHTML = level;
		// Add Horse
		var horseEight = new Horse();
		horseImageDraw(horseEight);
		horseEight.switchDirectionsListener();
	}
};



