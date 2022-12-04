const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require('./routes/articles');
const Article = require('./models/article')
const connectDB = require('./config/db');
const methodOverride = require('method-override')
require('dotenv').config()


// mongoose.connect("mongodb://localhost:3333/blog").catch(error => {console.log(error)})

connectDB()


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

app.get("/", async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    });
    res.render('articles/index', { articles: articles})
})

app.use("/articles", articleRouter);

app.listen(5000);