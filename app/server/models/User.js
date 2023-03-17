const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: String,
  Password: String,
  Type:Boolean,    
});

module.exports = UserSchema