var express = require('express');
var authorRouter = express.Router();


var {authorModel} = require('../models/authorModel');

var authors = [
    {
        name: "Adolf Hitler",
        dob: "20 April 1889",
        country: "Germany",
        image: "adolf.jpg"


    },
    {
        name: "Paulo Coelho",
        dob: "24 August 1947",
        country: "Brazil",
        image: "paulo.jpg"


    },
    {
        name: "Robin Sharma",
        dob: "16 June 1964",
        country: "Canadian",
        image: "robin.jpg"


    },
    {
        name: "APJ Abdul Kalam",
        dob: "15 October 1931",
        country: "India",
        image: "apj.jpg"


    }
]


function router(nav) {
    authorRouter.route('/')
        .get(function (req, res) {
            res.render('authors',
                {
                    nav,
                    title: "Authors",
                    authors
                });
        })

    authorRouter.route('/add')
        .get(function (req, res) {
                res.render('addauthor',
                {
                    nav,
                    title: "Add Author"

                });

        })


    
    
        authorRouter.route('/save')
        .post(function (req, res) {

      
            var authorss = new authorModel(req.body);
     
            authorss.save( (error, data)=>{

                if(error)
                {

                    res.json({"status":"eror"});
                    // throw error;

                }

                else{
                    res.json({"status":"success"});
                }
            })

        })
    
        authorRouter.route('/:id')
        .get(function (req, res) {
            const id = req.params.id;

            res.render('author',
                {
                    nav,
                    title: "Author",
                    author: authors[id]

                });

        })




    return authorRouter;
}

module.exports = router;