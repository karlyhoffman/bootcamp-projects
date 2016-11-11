function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

function findRemainder(x, y) {
	return x % y;
}

function takeCareOfDogs(arrayOfDogs) {
	for (var i = 0; i < arrayOfDogs.length; i++) {
		feedDog(arrayOfDogs[i]);
	}
}

function feedDog (puppy) {
	console.log("I am feeding " + puppy);
}

var dogs = ["ben", "luca", "mai"];
takeCareOfDogs(dogs);

