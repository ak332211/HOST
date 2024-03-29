const express = require('express');
const chalk = require('chalk');
const path = require('path');

var mongoose = require('mongoose');


const bodyparser = require('body-parser');      //body-parser module
const cors = require('cors');                   //cors module


const app = new express();


var nav = [
    {
        link: "/",
        title: "HOME"
    },

    {
        link: "/contactus",
        title: "CONTACT US"

    },

    {
        link: "/signup",
        title: "SIGN UP"
    },

    {
        link: "/login",
        title: "LOGIN"
    },

    {
        link: "/books",
        title: "BOOKS"
    },

    {
        link: "/authors",
        title: "AUTHORS"
    },

    {
        link: "/books/add",
        title: "ADD BOOK"
    },

    {
        link: "/authors/add",
        title: "ADD AUTHOR"
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);            //'nav' array as an argument to the function in booksrouter page  
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const contactusRouter = require('./src/routes/contactusRoutes')(nav);


app.use(express.static(path.join(__dirname, "/public")));


app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/books', booksRouter);        
app.use('/authors', authorRouter);      
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/contactus', contactusRouter);


mongoose.connect("mongodb+srv://akDb:hello12345@cluster0-cnapv.mongodb.net/test?retryWrites=true&w=majority")

// mongoose.connect("mongodb://localhost:27017/MyLibraryDb")        


app.set('views', './src/views');            //we are setting the 'views' from the specified path on the right
app.set('view engine', 'ejs');             


app.get('/', function (req, res) {            

    res.render('index',
        {
            nav,
            title: "Library",
        });

});

app.listen(process.env.PORT || 4500, function () {              
    console.log("Listening to port " + chalk.yellow('4500'));

});