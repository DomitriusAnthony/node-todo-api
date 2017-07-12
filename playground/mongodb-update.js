const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('59663b59e61b31c09c8637db')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	$returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });


// change name and increment age by 1

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('59659f61adca74207bd952e0')
	}, {
		$set: {
			name: "Domitrius"
		},
		
		$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
	}).then((result) => {
		console.log(result);
	});


});