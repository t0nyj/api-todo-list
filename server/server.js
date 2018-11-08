let express = require('express');
let bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');


let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => res.status(400).send(e))
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  //console.log(id);
  //console.log(ObjectID.isValid(id));
  if(!ObjectID.isValid(id)) {
    //console.log('xx');
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }, (e) => res.status(400).send(e));
});

app.listen(3000, () => {
  console.log('Server running on 3000');
});

module.exports = {app};
