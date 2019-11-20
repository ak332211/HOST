var express = require('express');
var booksRouter = express.Router();

var {bookModel} = require('../models/bookModel');



var books = [

    {
        title: "Mein Kampf",
        genre: "Autobiography",
        author: "Adolf Hitler",
        image: "mein.jpg"
    },

    {
        title: "Alchemist",
        genre: "Novel",
        author: "Paulo Coelho",
        image: "alchemist.jpg"
    },
    {
        title: "Monk who sold his ferrari",
        genre: "fable",
        author: "Robin Sharma",
        image: "monk.jpg"
    },
    {
        title: "Wings of fire",
        genre: "Autobiography",
        author: "APJ Abdul Kalam",
        image: "wings.jpg"
    }


]

var test;


function router(nav) {


    booksRouter.route('/')
        .get( (req, res)=> {
            bookModel.find( (error, data)=>{

                test=data;

                if(error)
                {
                    throw error;
                }
                else{
                    // res.json(data);
                    res.render('books', {
                        nav,
                        title: "BOOKS",
                        books:data
                    })
                }
        
                })

        })


    booksRouter.route('/add')
        .get(function (req, res) {
            res.render('addbook',
                {
                    nav,
                    title: "ADD BOOK",

                });
        })

    booksRouter.route('/save')
        .post(function (req, res) {

            // res.send("Form Submitted");



            // console.log(req.body.title);


            var books = new bookModel(req.body);
            // books.save();

            books.save( (error, data)=>{

                if(error)
                {

                    // res.send(error);
                    res.json({"status":"eror"});
                    // throw error;

                }

                else{
                    res.json({"status":"success"});
                }
            })

        })


    booksRouter.route('/:id')                       //used for accepting value coming from html page
        .get(function (req, res) {
            const id = req.params.id;

            res.render('book',
                {
                    nav,
                    title: "Book",
                    book: test[id]
                });

        })

    return booksRouter;

}

module.exports = router;