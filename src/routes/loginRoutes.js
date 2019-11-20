var express = require('express');
var loginRouter = express.Router();


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
            console.log(req.body);
        })


    return loginRouter;
}

module.exports = router;