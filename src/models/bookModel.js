const mongoose = require('mongoose')

var bookSchema = new mongoose.Schema(
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

var bookModel = mongoose.model('books' , bookSchema);



module.exports = {bookModel}