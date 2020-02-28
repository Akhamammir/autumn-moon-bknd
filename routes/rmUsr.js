var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('../Models/mongooseModels');
var uri = "mongodb+srv://root:S4kur4-007@testcluster-fkm78.gcp.mongodb.net/Heza?retryWrites=true&w=majority";
router.post('/', function(req, res, next) {
  mongoose.connect(uri, {useNewUrlParser: true});
  let db = mongoose.connection;
    console.log(req.body.state)
    let state = req.body.state;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(err) {
    console.log(err)
    Models.User.findByIdAndDelete ({_id:req.body._id},function(err, doc) {
      console.log(err)
      if (err){
        console.log(err)
        return res.send(500, {error: err});
      }
      return res.send('Succesfully saved.');
    } )
  });
});

module.exports = router;
