const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    familyName: { type: String, rquired: true},
    email: { type: String, required: true},
    sujet: { type: String, required: true},
    message: { type: String, required: true},
})

module.exports = mongoose.model('Form', formSchema);