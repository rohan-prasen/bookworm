// Requiring list
require('./list');

// Requiring Mongoose
const mongoose = require('mongoose');

// URI
const URI =  "mongodb://0.0.0.0:27017";

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