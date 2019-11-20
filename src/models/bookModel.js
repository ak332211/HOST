const mongoose = require('mongoose')

// var bookModel = mongoose.model('books' ,
// {

//     title:String,
//     author:String,
//     genre:String,
//     image:String

// });


var studentSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },

        author:{
            type:String,
            required:true
        },
        
        genre:{
            type:String,
            required:true
        },

        image:{
            type:String,
            required:true
        },
    }
)

var bookModel = mongoose.model('books' , studentSchema);



module.exports = {bookModel}