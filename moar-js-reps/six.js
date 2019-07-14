// 6. Loops, Loops, Merry-go-round
	// Create an array of your friends.
	// Now, create a loop that will `pop` a friend out every time the loop runs.
	// Tell a funny story about how they leave each time. `console.log` is your friend here.

var friends = ["Christopher", "Rena", "JT"];
function byeFriends(){
	while(friends.length > 0) {
	    var popped = friends.pop();
	    if ( popped === "JT" ) {
			console.log( "JT left, he needs to go to the record store.");
		} else if ( popped === "Rena" ) {
			console.log("Rena left, she needs to go to Milwaukee.");
		} else if ( popped === "Christopher" ) {
			console.log("Christopher left, he needed to go dancing.");
		}
	}
};
byeFriends();

