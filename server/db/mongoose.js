let mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,
{ useNewUrlParser: true }, (err) => {
  if(err) {
    console.log(error);
  }
});

module.exports = {mongoose};
