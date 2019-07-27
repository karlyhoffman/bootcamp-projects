// PART I
var age = window.prompt("What is your age?");
parseInt(age);
console.log(age);

if (age > 20) {
	window.alert("Let's party!");
} else {
	window.alert("Too bad, little one.");
}

//PART II
var nerds = [];
var emails = [];

var name = window.prompt("What is your first and last name?");

function splitString(name, separator) {
  //var arrayOfStrings = name.split(separator);

  //console.log( arrayOfStrings.join(' / '));
  var strReverse = name.split(separator).reverse().join(', ');
  console.log(strReverse);
  nerds.push(strReverse);

  //var lastName = [];
  //var firstName = [];
}

var space = ' ';

splitString(name, space);

var email = window.prompt("What is your email?");
emails.push(email);

console.log(nerds);
console.log(emails);

