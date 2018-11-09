const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let x = new Todo({text: 'Tony'});
// x.save().then((doc) => {
//   console.log(doc)
// }, (err) => {
//   console.log(err);
// });
//
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndDelete('5be5d22b02a0c702ee92cf70').then((todo) => {
//   console.log(todo);
// });
