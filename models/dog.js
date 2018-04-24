
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const dogSchema = new Schema({
  name: String,
  owner: {
    type: ObjectId,
    ref: 'User'
  },

  age: Number,
  likes: []
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
