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
  console.log(req.body)
  var query = Models.Person.findOne({email:req.body.usr});
    query.lean(true);
    query.exec(function (err, person) {
      if (err) return handleError(err);
      console.log(person);
      if (person) {
        console.log('1')
        if(req.body.pwd == person.Pwd){
          console.log('2')
          res.status(202).send({Usr:person})
        } else {
          console.log('2a')
          res.sendStatus(200)
        }
      } else {
        console.log('1a')
        res.sendStatus(200)
      }
      //res.send({'User':person})
    });
});
router.post('/getUser', function(req, res, next) {
  const id = req.body.id
  console.log(id)
    var query = Models.Person.findOne({_id : id});
      query.lean(true);
      query.exec(function (err, doc) {
        if (err){
          console.log(err)
          return res.send(500, {error: err});
        }
        console.log(doc, 'person, line 10');
        res.send({'User':doc})
      });
  });
module.exports = router;
