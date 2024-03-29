const mongoose = require('mongoose')


var authorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }

    }
)

var authorModel = mongoose.model('authors' , authorSchema);



module.exports = {authorModel}