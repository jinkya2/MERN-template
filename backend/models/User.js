const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  },
  nationality: {
    type: String
  },
  email: {
    type: String
  },
  IDno: {
    type: Number
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)