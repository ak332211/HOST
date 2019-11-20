var express = require('express');
var contactusRouter = express.Router();


function router(nav) {
    contactusRouter.route('/')
        .get(function (req, res) {
            res.render('contactus',
                {
                    nav,
                    title: "Contact Us",

                });
        })


    return contactusRouter;
}

module.exports = router;