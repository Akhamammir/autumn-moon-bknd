var express = require('express');
var router = express.Router();
var Models = require('./../Models/mongooseModels');
/* GET users listing. */
/*var UsrSchema = new mongoose.Schema({
  Name: String,
  Last_Name:String,
  Usr:String,
  Pwd:String
});*/

router.post('/', function(req, res, next) {
  //console.log(req.body.usr)
  /*
  var kittySchema = new mongoose.Schema({
    name: String
  });
  let Kitten = mongoose.model('Cat', kittySchema);
  let Snow = new Kitten({name:'Snow'});
  Snow.save()*/
  var query = Models.Person.findOne({Usr:req.body.usr});
    query.lean(true);
    query.exec(function (err, person) {
      if (err) return handleError(err);
      console.log(person);
      res.send({'User':person})
    });
});

module.exports = router;
