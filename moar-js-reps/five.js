// 5. Conditional Trials
	// Create a logical block that detects if a user is able to purchase alcohol.
	// If so, `console.log` out that they may have a drink.
	// Else, warn them via `console.log` to not break the law.

var age = prompt("How old are you?");
if (age > 20) {
	console.log("Enjoy a drink.");
} else {
	console.log("You must be 21 or older to drink legally.");
};