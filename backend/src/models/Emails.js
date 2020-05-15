const mongoose = require('mongoose');


const EmailSchema = new mongoose.Schema({

    link_id: Number,
    
    email:  [String],


})



module.exports = mongoose.model('Email', EmailSchema)