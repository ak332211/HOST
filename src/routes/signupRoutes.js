var express = require('express');
var signupRouter = express.Router();


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
            console.log(req.body);
        })


    return signupRouter;
}

module.exports = router;