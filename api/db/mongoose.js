const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://supahsid157:supahsid157@cluster0.dxogt.mongodb.net/TaskManager?retryWrites=true&w=majority', {
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