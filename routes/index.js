var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karly Hoffman' });
});

router.get('/about', function(req, res, next){
	var self = {
		name: "Karly",
		phone: "760-867-5309",
		email: "hotchick@aol.com"
	};
	/* response.render()
	First: Template (view)
	Second: an Object with data
	*/
	res.render('about', self);
});

router.get('/faq', function(req, res, next) {
	var questions = {
		questions: ["Why don't seagulls fly by the bay?", "Why did the students eat their homework?", "Do you like pina coladas?"],
		answers: ["Because then they'd be called bagels.", "Because the teacher said it was a piece of cake.", "Yes, and getting caught in the rain."]
	};
	res.render('faq', questions);
});

router.get('/login', function(req, res, next) {
	var user = {
		// name: 'Karly',
		password: 'password',
		hint: 'strovia'
	};
	res.render('login', user);
});



module.exports = router;
