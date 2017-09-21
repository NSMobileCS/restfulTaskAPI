var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String},
    completed: {type: Boolean},
    },
    {timestamps: true});

mongoose.model('Task', TaskSchema);
