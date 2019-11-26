const mongoose=require('mongoose');

var signupSchema=new mongoose.Schema({

    name: String,

    email:String,

    phone:Number,

    password:String,

    cpassword:String,

    dob:Date,

    gender:String,
    
    agree:{type:String,
            required:true}

});
var signupModel=mongoose.model('logdata',signupSchema);
module.exports={signupModel}