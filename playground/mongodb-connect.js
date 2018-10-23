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
  // db.collection('Users').insertOne({
  //   name: 'Roger',
  //   age: 37,
  //   location: 'Basel'}, (err, result) => {
  //     if(err){
  //       return console.log('Unable to add to collection', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   })
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bce55793b563b16d962fc94')
  // })
  // .toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // })
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bce55793b563b16d962fc94')
  // })
  // .count().then((count) => {
  //   console.log('Todos count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // })
  db.collection('Users').find({
    name: 'Tony'
  })
  .toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos');
  })
  client.close();
});
