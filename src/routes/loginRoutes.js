var express = require('express');
var loginRouter = express.Router();

var { signupModel } = require('../models/signupModel');

function router(nav) {
    loginRouter.route('/')
        .get(function (req, res) {
            res.render('login',
                {
                    nav,
                    title: "LogIn",

                });
        })

    loginRouter.route('/save')
        .post(function (req, res) {
            //console.log(req.body);

            signupModel.findOne({emls:req.body.emls, pwd:req.body.pwd},(error,data)=>{
                if(error){
                    res.json({status:"error"})
                    throw err;
                }
                else if(!data){
                    res.json({status:"failed"});
                }
                else{
                    res.json({status:"Success"})
                }
            });
        })


    return loginRouter;
}

module.exports = router;