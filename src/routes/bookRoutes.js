var express = require('express');
var booksRouter = express.Router();

var { bookModel } = require('../models/bookModel');



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
        .get((req, res) => {
            bookModel.find((error, data) => {

                test = data;

                if (error) {
                    throw error;
                }
                else {
                    // res.json(data);
                    res.render('books', {
                        nav,
                        title: "BOOKS",
                        books: data
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

            // console.log(req.body.title);
            var books = new bookModel(req.body);

            books.save((error, data) => {

                if (error) {
                    res.json({ status: "eror" });
                    // throw error;
                }
                else {
                    res.json({ status: "success" });
                }
            })
        })


    booksRouter.route('/readmore')
        .post(function (req, res) {
            bookModel.findById(req.body.id, (error, data) => {
                if (error) {
                    res.json({ status: "Error" });
                    // throw error;
                }
                else {
                    console.log(data);
                    res.render('book',
                        {
                            nav,
                            title: "Book",
                            book: data
                        })

                }
            })
        })


    booksRouter.route('/edit')
        .post(function (req, res) {
            bookModel.findById(req.body.id, (error, data) => {
                if (error) {
                    res.json({status: "Error" });
                    // throw error;
                }
                else {
                    res.render('bookUpdate',
                        {
                            nav,
                            title: "Update Book",
                            data
                        })

                }
            })
        })

    booksRouter.route('/update')
        .post(function (req, res) {
            bookModel.findByIdAndUpdate(req.body.id, { $set: req.body }, (error, data) => {
                if (error) {
                    res.json({ status: "Error" });
                }
                else {
                    // console.log(req.body);
                    // console.log(data);
                    res.redirect("/books");
                }
            })
        })

    booksRouter.route('/delete')
        .post(function (req, res) {
            bookModel.findByIdAndDelete(req.body.id, (error, data) => {
                if (error) {
                    res.json({ status: "Error" });
                }
                else {
                     res.redirect("/books");
                }
            })
        })

    return booksRouter;

}

module.exports = router;