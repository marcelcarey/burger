var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {burgers: data} )
    })
})
router.post('/api/burgers', function(req, res) {
    burger.insert([
        req.body.name
    ], function(result) {
        res.json( { id: result.insertedId } )
    })
})

router.put('/api/burgers/:id', function(req, res) {
    burger.update(req.body.devoured, req.params.id, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    });
});

module.exports = router;
