var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
	type: String,
	required: true,
	minlength: 1,
	trim: true
	}	
});

module.exports = {User};

// Example::

// var newUser = new User({
// 	email: "domitrius@lol.com"
// });

// newUser.save().then((doc) => {
// 	console.log("User saved", doc);
// }, (err) => {
// 	console.log("Unable to save the user", e);
// })