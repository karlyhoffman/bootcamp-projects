console.log("Cool, the window loaded.")


//ROUND 1

// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
function length(arrayOfStrings){
	// print that array
	console.log(arrayOfStrings);
	// define new array to store string lengths
	var stringLengthArray = [];
	//cycle through arrayOfStrings and define string length
	for (var i = 0 ; i < arrayOfStrings.length ; i++) {
		arrayOfStrings[i] = arrayOfStrings[i].length;
		//push string length to new array
		stringLengthArray.push(arrayOfStrings[i]);
	}

	return stringLengthArray;
};

console.log(length(["Karly", "Lynn", "Hoffman"]));




// ROUND 2

// declare function named "transmogrifier" with three number arguments
// transmogrifier returns product of 1st two numbers, raised to the power of third number
function transmogrifier(num1, num2, num3) {
	// multiply first two numbers
	var base = num1 * num2;
	// raise first two numbers to the power of third number
	var transmogrified = Math.pow(base, num3);
	return transmogrified;
};

console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));



// ROUND 3

// Write a function called toonify that takes two parameters, accent and sentence.
function toonify(accent, sentence) {
	accent.toLowerCase();
	// If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
	if ( accent === "daffy") {
		return sentence.replace(/s/g, 'th');
	}
	// If the accent is "elmer", replace all "r" with "w".
	else if (accent === "elmer") {
		return sentence.replace(/r/g, 'w');
	}
	// Feel free to add your own accents as well!
	else if (accent === "german") {
		return sentence.replace(/w/g, 'v');
	}
	// If the accent is not recognized, just return the sentence as-is.
	else {
		return sentence;
	};
	return
};

toonify("daffy", "so you smell like sausage");
toonify("elmer", "root root for the home team");
toonify("german", "what are you saying?");



// ROUND 4

//write function "wordReverse" with single argument, a string
function wordReverse(string) {
	//split string by spaces, and reserve order of items to make new string
	var separator = " ";
	var splitString = string.split(separator).reverse().join(" ");
	console.log(splitString);
};

wordReverse("Karly Lynn Hoffman");



// ROUND 5

//write function "letterReverse" with single argument, a string
function letterReverse(string) {
	//split string by letters, and reserve order of items to make new string
	var lettersReversed = string.split('').reverse().join('');
	console.log(lettersReversed);
};

letterReverse("Karly Lynn Hoffman");



// ROUND 6

//write a function "longest" that accepts a single argument, an array of strings.
function longest(arrayOfStrings) {
	//print array
	console.log(arrayOfStrings);
	//declare longestString
	var longestString = '';
	
	//pass through the array to find longer string
	for (var i = 0 ; i < arrayOfStrings.length ; i++) {

		if (arrayOfStrings[i].length > longestString.length ) {
			longestString = arrayOfStrings[i];
		} 
		else {
			//run through function again
		}
	}
	console.log(longestString);
};

longest(["Oh", "home", "on", "the", "range", "dude"]);



// FINAL ROUND

//write a function "repMaster" that accepts two arguments, input and a function.
function repMaster (input, aFunction) {
	// repMaster should take the result of the string, passed as an argument to the argument function, 
	var aFunction = toonify("german", input);
	var repMasterSentence = aFunction + ' which proves that I am the rep MASTER!';
	//and return this result with ' proves that I am the rep MASTER!' concatenated to it.
	console.log(repMasterSentence);
};

repMaster("woah, I was able to do it!", toonify);


