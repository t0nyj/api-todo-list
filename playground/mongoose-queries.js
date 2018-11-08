const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5be33cfbc9c20e0e4b991912';
let userId = '5be1a77fc9046a07174ad9f8';

// if(!ObjectID.isValid()) {
//   console.log('Invalid Object ID');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('Todo: ', todo);
// });

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User: ', user);
}, (e) => console.log(e));
