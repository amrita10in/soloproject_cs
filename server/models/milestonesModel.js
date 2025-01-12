const mongoose = require('mongoose');
const Schema = mongoose.schema;

const milestoneSchema = new Schema ({
  age: {type: Number, required: true },
  milestones: {type: [String], required: true},
});

module.exports = mongoose.model('Milestone', milestoneSchema);