const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Comment = require('../models/comment')

router.post('/', async (req, res) => {
    const post = await Post.findById(req.params.id);
    const comment = new Comment(req.body.comment);
    comment.user = req.user._id;
    console.log(post);
    console.log(comment);
    console.log(comment.user);
    // post.comments.push(comment);
    // await comment.save();
    // await post.save();
    // res.json('Added a comment!');
});

router.delete('/:commentId' , async (req, res) => {
    res.json('Deleted a comment!');
});

module.exports = router;