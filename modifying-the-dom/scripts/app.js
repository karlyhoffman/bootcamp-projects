window.onload = function function_name(event) {
	console.log("Linked.");
	var checkmark = "(check)";
	// get a list of element with a tag
	var list = document.getElementsByTagName('li');
	var n = list.length ; // length of our last
	
	var paragraph = document.getElementById("target-for-text");
	var content = buildParagraph("I love waffles.");
	var name = document.getElementById('name');
	// name.innerHTML = "I am the queen of all things awesome."
	var username = prompt("What is your name?");

	name.innerHTML = username;
	paragraph.innerHTML = content;
	// console.log(checkmark);
	// console.log(list);

	for (var i = 0; i < n; i++) {
		list[i].innerHTML = list[i].innerHTML + checkmark;
	}

	// loop through the ordered list
	// at the end of the innerHTML of each li add <strong> wish I could have</stong>
	// loop in the reserve order
	for (var i = n - 1; i >= n; i--) {


	}
	console.log(paragraph);
	console.log(content);

	function buildParagraph(context) {
		var openTag = "<em><strong>";
		var closingTag = "</strong></em>";
		return openTag + context + closingTag;
	}

};
