var express = require('express');
var router = express.Router();
var bookRouter = require("../models/book");
router.get('/', function(req, res, next) {
    try 
    {
        bookRouter.find().then((books) => {
            res.json(books);
        })
    } 
    catch (error) 
    {
        res.json(err);
    }
   
});


router.get('/:id', function(req, res, next) {
    try 
    {
        bookRouter.findById(req.params.id, (err, book) => {
            if(err) res.send(err);
            //If no errors, sendr it back to the client
            res.json(book);
        })
    } 
    catch (error) 
    {
        res.json(err);
    }
    
  
});

/* Movie adding post method. */
router.post("/", function(req, res, next){
    try {
        new bookRouter({
            Title : req.body.Title,
            Author: req.body.Author,
            Price: req.body.Price,
            ISBN: req.body.ISBN,
            Language: req.body.Language,
            NumberOfPages: req.body.NumberOfPages,
            Publisher: req.body.Publisher
        }).save().then(book => {
            res.json(book);
        })
    } 
    catch (error) 
    {
        res.json({Message:"Book save failed."});
    }
});

/* Movie update method */
router.put("/:id", function(req, res, next){
  
    var id = req.params.id;
    try 
    {
        bookRouter.findByIdAndUpdate({"_id": id}, req.body).then((newMovie) => {
            res.json("Book update success.");})
    } 
    catch (error) 
    {
        res.json("Book update un-successful.");
    }
 
  
});

/* Movie delete method */
router.delete("/:id", function(req, res, next){
    try 
    {
        var id = req.params.id;
        bookRouter.findByIdAndRemove(id).then(() => {
        res.json("Book delete operation successful.");
    })
    } 
    catch (error) 
    {
        res.json("Book delete operation un-successful.");
    }
   
  
});


module.exports = router;
