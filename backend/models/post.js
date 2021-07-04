const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    title: String,
    content: String,
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, { toJSON: { virtuals: true } });


module.exports = mongoose.model('Post', postsSchema);