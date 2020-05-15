const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const LinkSchema = new mongoose.Schema({

    link_id: Number,
    
    pdf:  String,



});

LinkSchema.plugin(AutoIncrement, {id:'_seq',inc_field: 'link_id'});

module.exports = mongoose.model('Link', LinkSchema)