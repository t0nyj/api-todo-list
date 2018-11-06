const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',
  {useNewUrlParser: true}, (err, client) => {
  if(err){
    return console.log('Unable to connect db');
  }
  console.log('Connected to db');
  const db = client.db('ToDoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo ', err);
  //   }
  //   console.log(JSON.stringify(result.ops));
  // });
  db.collection('Users').insertOne({
    name: 'Roger',
    age: 37,
    location: 'Basel'
  }, (err, result) => {
    if(err) {
      return console.log(err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});
