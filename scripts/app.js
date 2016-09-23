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


























