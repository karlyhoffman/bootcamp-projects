// 3. Objects; Objects Everywhere
	// Create an Object that represents a laptop.
	// Give it 3-5 attributes.
	// Give it one ability that tells the world about itself (similar to a `to_s` in Ruby)
	
var laptop = {
	brand: "Macintosh",
	model: "MacBook Pro",
	screenSize: 13,
	tellWorldAboutSelf: function(){
		console.log("I am a " + this.brand + " " + this.model + " with a " + this.screenSize + " inch screen.");
	}
};