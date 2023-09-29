var mongoose = require('mongoose');
var Book = mongoose.model('Bookworm');
module.exports.booksReadOne = async function (req, res) {
    try {
        const book = await
        Book.findById(req.params.bookid).exec();
        sendJsonResponse(res, 200, book);
        console.log(book);
    } catch (err) {
        // Handle the error 
        sendJsonResponse(res, 500, { error: 'An error occurred'});
    }
};

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };

    module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };

    module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };

    module.exports.locationsReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };

    module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    
    module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};