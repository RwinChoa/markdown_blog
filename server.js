const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require('./routes/articles');
const connectDB = require('./config/db');
require('dotenv').config()


// mongoose.connect("mongodb://localhost:3333/blog").catch(error => {console.log(error)})

connectDB()


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    const articles = [
        {
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test description'
        },
        {
            title: 'Test Article 2',
            createdAt: new Date(),
            description: 'Test description 2'
        },
    ]
    res.render('articles/index', { articles: articles})
})

app.use("/articles", articleRouter);

app.listen(5000);