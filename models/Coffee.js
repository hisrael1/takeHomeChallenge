const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./Post');

const CoffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    caffeineContent: {
        type: Number,
        required: true
    },
    caffeinePercentage: {
        type: Number,
        required: true
    }
},  {
        timestamps: true
});

module.exports = Coffee = mongoose.model("Coffee", CoffeeSchema);
