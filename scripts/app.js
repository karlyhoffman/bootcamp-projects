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
	console.log(stringLengthArray);
};

length(["Karly", "Lynn", "Hoffman"]);