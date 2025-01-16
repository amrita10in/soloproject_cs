const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema ({
    username: {type: String, required: true},
    date: {type: String, required: true },
    type: {type: String, required: true},
    location: {type: String, required: true},
    provider: {type: String, required: true}
});

module.exports = mongoose.model('Appointments', appointmentsSchema);