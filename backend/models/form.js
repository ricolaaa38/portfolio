const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name: { type: String, required: true},
    firstname: { type: String, rquired: true},
    email: { type: String, required: true},
    sujet: { type: String, required: true},
    message: { type: String, required: true},
})

module.exports = mongoose.model('Form', formSchema);