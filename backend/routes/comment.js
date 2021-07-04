const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Comment = require('../models/comment')

router.post('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    const comment = req.body.comment
    const nComment = new Comment({
        comment,
    });
    post.comments.push(nComment);
    await nComment.save();
    await post.save()
    .then (() => res.json('POST new comment'))
    .catch (err => res.status(400).json('Error: ' + err))
});

router.delete('/:commentId' , async (req, res) => {
    res.json('Deleted a comment!');
});

module.exports = router;