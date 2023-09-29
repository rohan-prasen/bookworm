// Requiring list
require('./list');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Requiring Mongoose
const mongoose = require('mongoose');

// URI
var gracefulShutdown;
const URI =  "mongodb://localhost:27017/bookworm";
if (process.env.NODE_ENV === 'production') {
    URI = process.env.MONGODB_URI;
}

// connection establishing 
mongoose.connect(URI);

// Connected Event
mongoose.connection.on('connected', function() {
    console.log("Mongoose connected to " + URI);
});

// Error Event
mongoose.connection.on('error', function() {
    console.log("Mongoose connection error: ");
});

// Disconnected Event
mongoose.connection.on('disconnected', function() {
    console.log("Mongoose disconnected");
});