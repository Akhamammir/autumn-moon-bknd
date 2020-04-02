var express = require('express');
var router = express.Router();
var Models = require('../Models/mongooseModels');
router.post('/', function(req, res, next) {
  Models.User.findByIdAndDelete ({_id:req.body._id},function(err, doc) {
    console.log(err)
    if (err){
      console.log(err)
      return res.send(500, {error: err});
    }
    return res.send('Succesfully saved.');
  } )
});

module.exports = router;
