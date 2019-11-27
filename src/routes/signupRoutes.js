var express = require('express');
var signupRouter = express.Router();

var { signupModel } = require('../models/signupModel');

function router(nav) {
    signupRouter.route('/')
        .get(function (req, res) {
            res.render('signup',
                {
                    nav,
                    title: "Sign Up",

                });
        })


    signupRouter.route('/save')
        .post(function (req, res) {
            //console.log(req.body);
            var add =  new signupModel(req.body);
            add.save((error, data)=>{
                if(error)
                {
                    res.json({status:"Failed"});
                }
                else{
                    res.json({status:"Success"});
                }
            })
        })


    return signupRouter;
}

module.exports = router;