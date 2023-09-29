// Requiring mongoose
var mongoose = require('mongoose');

// Defining Schemas
// Review Schema
var reviewSchema = new mongoose.Schema({
    author : String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// 