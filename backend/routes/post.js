const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/' , async (req, res) => {
    await Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error:' + err));
});

router.post('/add', async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newPost = new Post({
        title,
        content
    });
    await newPost.save()
    .then(() => res.json('Post Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;