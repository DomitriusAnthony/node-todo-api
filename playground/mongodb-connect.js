// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// object destructuring lets you pull out properties from on object, creating variables

// EX: 
// var user = {name: "Domitrius", age: 24}
// var {name} = user;




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	// db.collection('Todos').insertOne({

	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log("Unable to insert ToDo", err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	// db.collection('Users').insertOne({
	// 	name: "Domitrius",
	// 	age: 24,
	// 	location: "Philadelphia"
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log("Unable to insert ToDo", err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });	

	db.close();
});