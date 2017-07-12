const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	// deleteMany lets us target many documents and removes them
	// db.collection("Todos").deleteMany({
	// 	text: "Eat lunch"
	// }).then((result) => {
	// 	console.log(result);
	// })


	// deleteOne deletes one item
	// db.collection("Todos").deleteOne({
	// 	text: "Eat lunch"
	// }).then((result) => {
	// 	console.log('result');
	// });


	// findOneAndDelete lets your remove an individual item and returns the items
	// db.collection('Todos').findOneAndDelete({
	// 	completed: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection("Users").deleteMany({
	// 	name: "Domitrius"
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection("Users").findOneAndDelete({
		_id: ObjectID('59659ff2af803f2085278c8b')
	}).then((result) => {
		console.log(result);
	});




});