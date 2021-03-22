const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('lol', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};