var mongoose = require('mongoose');
var people = mongoose.model('People');

var process = require('../controllers/process.js');

module.exports = function(app) {

    app.get('/', function(req, res) {
        process.index(req, res);
    });

    app.get('/new/:name', function(req, res) {
        process.new(req, res);
    });

    app.get('/remove/:name', function(req, res) {
        process.rmv(req, res);
    });

    app.get('/:name', function(req, res) {
        process.show(req,res);
    })
}