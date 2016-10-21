var laptop = {
	brand: "Macintosh",
	model: "MacBook Pro",
	screenSize: 13,
	tellWorldAboutSelf: function(){
		console.log("I am a " + this.brand + " " + this.model + " with a " + this.screenSize + " inch screen.");
	}
};

var laptopArray = Object.keys(laptop);
for (var i = 0; i < laptopArray.length; i++) {
	console.log(laptopArray[i]);
};