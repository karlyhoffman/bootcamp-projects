// 4. Objects... again
	// Using the Object you created for #3....
	// Research the Object method that lists all of the `keys` in an Object. Use it to create an array.
	// Loop through this array using a `for` (not a `for-in`) loop.
	// `console.log` the keys.

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