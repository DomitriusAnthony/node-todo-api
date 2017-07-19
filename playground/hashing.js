const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// header 
// payload
// hash


var data = {
	id: 10
};


// takes the object (data) and it signs. Creates hash and signs it returning token value
var token = jwt.sign(data, '123abc');
console.log(token);


// takes that token and secret and makes sure the data was not manipulated
var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);


















// var message = "I am user number 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// This is basically a JWT (JSON WEB TOKEN)

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// salting a hash with some randomly generated value gives a different result.
// use a different salt everytime

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
// 	console.log('Data was not changed.');
// } else {
// 	console.log("Data was changed don't trust!");
// }

