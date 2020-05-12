const mongoose = require('mongoose');
const LinkSchema = new mongoose.Schema({

    
    pdf:  String,



});

module.exports = mongoose.model('Link', LinkSchema)