var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
    index: function(req, res){
        People.find({}, function (err, people){
            console.log(people);
            res.json(people);
        })
    },
    new: function(req, res){
        console.log(req.params.name);
        var person = new People({name: req.params.name});
        person.save(function(err){
            if (err){
                console.log(err);
            } else {
                console.log('Person added');
                res.redirect('/');
            }
        })
    },
    rmv: function(req, res){
        People.remove({name: req.params.name}, function (err){
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        })
    },
    show: function(req, res){
        People.find({name: req.params.name}, function (err, people){
            if (err) {
                console.log(err);
            } else {
                res.json(people);
            }
        })
    }
}