/* Home page */
module.exports.homelist = function(req,res){
    res.render('books-list', {title : "Home"});
};

/* Books page */
module.exports.booksInfo = function(req,res){
    res.render('books-info', {title : "Books Information"});
};

module.exports.booksInfon = function(req,res){
    res.render('books-infon', {title : "Books Information"});
};

module.exports.catalogue= function(req,res){
    res.render('books-catalogue', {title : "Books Catalogue"});
};

module.exports.booksInfon1= function(req,res){
    res.render('books-infon1', {title : "Books Catalogue"});
};


module.exports.booksInfon2= function(req,res){
    res.render('books-infon2', {title : "Books Catalogue"});
};

module.exports.booksInfon3= function(req,res){
    res.render('books-infon3', {title : "Books Catalogue"});
};

/* Review page */
module.exports.addReview = function(req,res){
    res.render('book-review-form', {title : "Add Review"});
};

