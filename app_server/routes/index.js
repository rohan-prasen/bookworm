var express = require('express');
var router = express.Router();
var ctrlCatalogue = require('../controllers/list');
var ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlCatalogue.homelist);
router.get('/books', ctrlCatalogue.booksInfo); 
router.get('/books/review/new', ctrlCatalogue.addReview);
router.get('/books/Game_of_Thrones', ctrlCatalogue.booksInfo); 
router.get('/books/Philosophers_Stone', ctrlCatalogue.booksInfo); 
router.get('/books/Angels_and_Demons', ctrlCatalogue.booksInfon); 
router.get('/books/The_Son_Of_Neptune', ctrlCatalogue.booksInfon1); 
router.get('/books/The_Enemy', ctrlCatalogue.booksInfon3); 
router.get('/books/books-catalogue', ctrlCatalogue.catalogue);


/* Other pages */

router.get('/about', ctrlOthers.about);

module.exports = router;