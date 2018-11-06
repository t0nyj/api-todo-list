const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',
  {useNewUrlParser: true}, (err, client) => {
  if(err){
    return console.log('Unable to connect db');
  }
  console.log('Connected to db');
  const db = client.db('ToDoApp');
  // db.collection('Todos').findOneAndUpdate(
  //   {
  //     _id: new ObjectId("5bcf8dfe65f4903927eb172e")
  //   }, { $set: {
  //     completed: true
  //   }},{
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });
  // db.collection('Todos').findOneAndUpdate({
  //   completed: true
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }).then((result) => {
  //   console.log(result);
  // })
  // id = new ObjectID("5be1464cc115fd0270fe4d33");
  // console.log(id);
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5be1464cc115fd0270fe4d33")
  }, {
    $set: {
      name: 'Tony',
      location: 'Thrissur'
    }, $inc: {
      age: 13
    }
  }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });
  client.close();
});
