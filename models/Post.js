const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    coffee: {
        type: Schema.Types.ObjectId,
        ref: 'Coffee'
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
});

module.exports = Post = mongoose.model("Post", PostSchema);
