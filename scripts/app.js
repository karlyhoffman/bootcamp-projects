console.log('Linked');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//James wants you to change the horse styling everytime
// UNICORN!!! "Use Glow Property"
	//Pops up on last level OR Easter Egg = happen to click horses in a certain order

var score = 0;
var level = 1;
var lives = 3;   // Try to have icons to represent each life

var horses = [];

var img = new Image();
img.src = "images/evenSmallerHorse.png";


canvas.addEventListener('click', function(e){
	var trueX = e.pageX - ctx.canvas.offsetLeft;
	var trueY = e.pageY - ctx.canvas.offsetTop;
	console.log(trueX);
	console.log(trueY);

	if ( trueX >= horseOne.xCoor
		&& trueX <= horseOne.currentXCoorMax()
		&& trueY >= horseOne.yCoor
		&& trueY <= horseOne.currentYCoorMax()
	   ) {
		console.log("Horse clicked!");
	};
});


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
		ctx.clearRect(0, 0, canvas.width, canvas.height);  
		base.xCoor += base.randomXDirection;
		base.yCoor += base.randomYDirection;
		ctx.drawImage(img, base.xCoor, base.yCoor);
		// console.log(base.xCoor, base.yCoor)
 	},

 	this.animate = function(){
		base.moveHorse();
		// animate if within canvas borders:
		if (base.xCoor < canvas.width && base.yCoor < canvas.height
			&& base.yCoor > -60 && base.xCoor > -60) {
			window.requestAnimationFrame(base.animate);
		};
	}

	this.currentXCoorMax = function(){
		return base.xCoor + 55;
	},

	this.currentYCoorMax = function(){
		return base.yCoor + 50;
	}
};


var horseOne = new Horse();
// var horseTwo = new Horse();

horseImageDraw(horseOne);

// var horseThree = new Horse();  // Level 2
// var horseFour = new Horse();  // Level 3
// var horseFive = new Horse();  // Level 4
// var horseSix = new Horse();  // Level 5
// var horseSeven = new Horse();  // Level 6
// var horseEight = new Horse();  // Level 7


