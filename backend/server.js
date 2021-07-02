const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const passportStr = require('passport-local');
const cors =require('cors');
const port = process.env.port || 8080;

const User = require('./models/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportStr(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

app.use('/', userRoutes);
app.use('/posts', postRoutes);
app.use('/posts/:id/comment', commentRoutes);

mongoose.connect('mongodb://localhost:27017/blog-site', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Database connection established")
});

app.listen(port, () => {
    console.log("Server is up and running");
});