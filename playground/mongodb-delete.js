const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',
  {useNewUrlParser: true}, (err, client) => {
  if(err){
    return console.log('Unable to connect db');
  }
  console.log('Connected to db');
  const db = client.db('ToDoApp');
  //delete many
  //delete one
  //find one and delete
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // })
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });
  // db.collection('Users').deleteMany({name: 'Tony'}).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log(err);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5bcee6d37d0960177f9dff16")
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
  client.close();
});
