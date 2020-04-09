var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('./../Models/mongooseModels');
router.post('/', function(req, res, next) {
  var query = Models.Client.find({team:{$eq:req.body.team}});
    query.lean(true);
    query.exec(function (err, person) {
      if (err) return handleError(err);
      //console.log(person, 'person, line 10');
      res.send({'Clients':person})
    });
});


router.post('/upload', function(req, res, next) {
    //console.log(req.body.state)
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

module.exports = router;
