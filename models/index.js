const mongoose = require('mongoose');
const connnectionString =  process.env.MONGODB_URI || 'mongodb://localhost:27017/recipes';

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(connnectionString, options);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});


module.exports = {
  User: require('./User'),
  Recipe: require('./Recipe'),
};