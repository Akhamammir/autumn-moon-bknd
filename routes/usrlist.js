var express = require('express');
var router = express.Router();
var Models = require('./../Models/mongooseModels');
/* GET users listing. */
router.post('/', function(req, res, next) {
  var query = Models.Person.find({});
    query.lean(true);
    query.exec(function (err, persons) {
      if (err) return handleError(err);
      console.log(persons);
      res.send({'Users':persons})
    });
});
module.exports = router;
