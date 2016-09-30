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
  $( "article:first" ).append('<ul>').prop('id', 'the-shire');
  $.each(hobbits, function( i, value ){
    $('#the-shire ul').append('<li>' + value + '</li>');
    // give each hobbit a class of `hobbit`
    $('#the-shire li').addClass("hobbit")
  });
}
makeHobbits();

//PART III
function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
  var div = $('<div></div>');
  $(div).prop('id', 'the-ring').addClass('magic-imbued-jewelry');
  // add the ring as a child of `Frodo`
  $(".hobbit:first").append(div);
}
keepItSecretKeepItSafe();

//Part IV
function makeBuddies(){
  // create an `aside` tag
  var aside = $('<aside></aside>');
  // attach an `unordered list` of the `'buddies'` in the aside
  // insert your aside as a child element of `rivendell`
  $( "article:nth-child(2)" ).prop('id', 'rivendell').append(aside);
  $('#rivendell aside').append('<ul>');
  $.each(buddies, function( i, value ){
    $('#rivendell ul').append('<li>' + value + '</li>');
    // give each hobbit a class of `hobbit`
    $('#rivendell li').addClass("hobbit")
  });
}
makeBuddies();


function beautifulStranger(){
  // your answers here
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
