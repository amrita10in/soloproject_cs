const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema ({
  age: {type: Number, required: true },
  milestones: {type: [String], required: true},
});

module.exports = mongoose.model('Milestone', milestoneSchema);