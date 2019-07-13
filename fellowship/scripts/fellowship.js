console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';
var div = $('<div></div>');

// PART I
function makeMiddleEarth(){
  // create a section tag with an id of `middle-earth`
  var el = $(section);
  var middleEarth = $(el).prop('id', 'middle-earth');
  // append `middle-earth` to your document `body`
  $(body).append(middleEarth);
  // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land
  $.each(lands, function( i, value ){
    $('#middle-earth').append('<article>' + '<h1>' + value + '</h1>' + '</article>');
  });
}
makeMiddleEarth();

// PART II
function makeHobbits(){
  // display an `unordered list` of hobbits in the shire
  $( 'article:first' ).append('<ul>').prop('id', 'the-shire');
  $.each(hobbits, function( i, value ){
    $('#the-shire ul').append('<li>' + value + '</li>');
    // give each hobbit a class of `hobbit`
    $('#the-shire li').addClass("hobbit")
  });
  $( 'ul:first' ).prop('id', 'hobbits');
}
makeHobbits();

//PART III
function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
  var div = $('<div></div>');
  // give the div a class of `'magic-imbued-jewelry'`
  $(div).prop('id', 'the-ring').addClass('magic-imbued-jewelry');
  // add the ring as a child of `Frodo`
  $(".hobbit:first").append(div);
}
keepItSecretKeepItSafe();

//Part IV
function makeBuddies(){
  // create an `aside` tag
  var aside = $('<aside></aside>');
  $( 'article:nth-child(2)' ).prop('id', 'rivendell').append(aside);
  // attach an `unordered list` of the `'buddies'` in the aside
  $('#rivendell aside').append('<ul>').prop('id', 'buddies');
  // insert your aside as a child element of `rivendell`
  $.each(buddies, function( i, value ){
    $('#rivendell ul').append('<li>' + value + '</li>');
    $('#rivendell li').addClass("buddy")
  });
}
makeBuddies();

//Part V
function beautifulStranger(){
   // change the `'Strider'` text to `'Aragorn'`
   buddies[3] = 'Aragorn';
}
beautifulStranger();

//Part VI
function leaveTheShire(){
	// assemble the `hobbits` and move them to `rivendell`
	$( '#hobbits' ).remove();
	$.each(hobbits, function( i, value ){
    	$('#rivendell ul').append('<li>' + value + '</li>');
    	// give each hobbit a class of `hobbit`
    	$('#rivendell li').addClass("hobbit")
  });
}
leaveTheShire();

//Part VII
function forgeTheFellowship() {
   // create a new div called `'the-fellowship'` within `rivendell`
   var fellowDiv = $('<div>'+ '<ul>' + '</ul>' + '</div>').prop('id', 'the-fellowship');
   $('#rivendell').append(fellowDiv);
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	$('#rivendell li').each(function( index ) {
		$('#the-fellowship ul').append(this);
		// after each character is added make an alert that they // have joined your party
  		alert($( this ).text() + ' has joined the fellowship!');
  		$(this).removeClass('buddy hobbit').addClass('fellowship-member');
	});
	$('#buddies ul').remove();
}
forgeTheFellowship();

//Part VIII
function theBalrog(){
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
	var gandalfCSS = {
		backgroundColor: "white",
		border: "2px solid grey"
	};
	$('#the-fellowship ul li:first').text('Gandalf the White').css(gandalfCSS);
}
theBalrog();

//Part IX
function hornOfGondor() {
   // pop up an alert that the horn of gondor has been blown
   alert("The horn of gondor has been blown!");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   $('#the-fellowship ul li:nth-child(5)').remove();
}
hornOfGondor();

//Part X
function itsDangerousToGoAlone() {
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
	var div = $('<div id="mount-doom">');
	$('article:nth-child(3)').prop('id','mordor');
	$('#mordor').append(div);
	$('#the-fellowship ul li:nth-child(5)').remove();
	$('#the-fellowship ul li:nth-child(5)').remove();
	$('#mordor').append($('<ul>'));
    $('#mordor ul').append('<li>' + hobbits[0] + '</li>');
    $('#mordor ul').append('<li>' + hobbits[1] + '</li>');
    // give each hobbit a class of `hobbit`
    $('#mordor li').addClass("hobbit");
    keepItSecretKeepItSafe();
}
itsDangerousToGoAlone();

//Part XI
function weWantsIt() {
	// Create a div with an id of `'gollum'` and add it to Mordor
	var gollum = $('<div id="gollum">');
	var mountDoom = $('<div id="mount-doom">');
	$('#mordor').append(gollum);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	$('#the-ring').detach();
	$(gollum).append($('<div id="#the-ring" class="magic-imbued-jewelry">'));
	// Move Gollum into Mount Doom
	$('#mount-doom').append(gollum);
}
weWantsIt();

//Part XII
function thereAndBackAgain(){
	// remove `Gollum` and `the Ring` from the document
	$(gollum).remove()
	// Move all the `hobbits` back to `the shire`
	makeHobbits();
	//remove hobbits from rivendale
	$('#the-fellowship ul li:last').remove();
	$('#the-fellowship ul li:last').remove();
	//remove hobbits from mordor
	$('#mordor ul').remove();
}
thereAndBackAgain();
