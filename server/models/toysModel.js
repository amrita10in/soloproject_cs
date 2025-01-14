const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toySchema = new Schema ({             //toySchema
  name: {type: String, required: true},
  price: {type: String, required: true},
  link: {type: String, required: true}
})

const toysSchema = new Schema ({           //parentSchema
  age: {type: Number, required: true},
  toys: {type: [toySchema], required: true}
},
)

module.exports = mongoose.model('Toys', toysSchema);
