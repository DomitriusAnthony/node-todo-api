const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// if (!ObjectID.isValid(id)) {
// 	console.log("ID not valid");
// }


// var id = '5969aeea1dbca5e63561b6b8'

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not valid');
// 	}
// 	console.log('Todos', todo);
// });

var userId = '5966904102279b6a25c79f69'

User.findById(userId).then((user) => {
	if(!user) {
		return console.log("Id is not valid");
	}
	
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});