var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('./../Models/mongooseModels');

router.post('/', function(req, res, next) {
  console.log(req.body.team, 'usr team')
  var query = req.body.team == 'Admin' ? Models.Client.find({}): Models.Client.find({team: req.body.team });
    query.lean(true);
    query.exec(function (err, person) {
      if (err){
        console.log(err)
        return res.send(500, {error: err});
      }
      //console.log(person, 'person, line 10');
      res.send({'Clients':person})
    });
});


router.post('/client', function(req, res, next) {
const id = req.body.id
  var query = Models.Client.findOne({_id : id});
    query.lean(true);
    query.exec(function (err, doc) {
      if (err){
        console.log(err)
        return res.send(500, {error: err});
      }
      console.log(doc, 'person, line 10');
      res.send({'Client':doc})
    });
});


router.post('/upload', function(req, res, next) {
  let state = req.body.state;
    Models.Client.findOneAndUpdate({_id: state._id ? state._id : new mongoose.Types.ObjectId() },
      {
        ...state
      }, {upsert: true}, function(err, doc) {
      console.log(err)
      if (err){
        console.log(err)
        return res.send(500, {error: err});
      }
      return res.send('Succesfully saved.');
    } )
});

router.post('/delete', function(req, res, next) {
  Models.Client.findByIdAndDelete ({_id:req.body._id},function(err, doc) {
    console.log(err)
    if (err){
      console.log(err)
      return res.send(500, {error: err});
    }
    return res.send('Succesfully saved.');
  } )
  });

module.exports = router;
