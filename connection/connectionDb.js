const mongoose = require('mongoose');
const URL_DB =
  'mongodb+srv://db_user_platzi_chat:cQzpGmM0DAM2@cluster0.ybgzp.mongodb.net/airbnbapp_db?retryWrites=true&w=majority';
mongoose.connect(URL_DB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => console.error('Error connecting with database'));
db.once('open', () => console.info('Connection with mongo success'));

module.exports = db;
