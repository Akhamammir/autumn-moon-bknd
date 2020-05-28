var express = require('express');
var router = express.Router();
var Models = require('./../Models/mongooseModels');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
  var query = Models.Kitty.findOne({ API_KEY: req.body.API });
  query.exec(function (err, kitty) {
    if (err) {
      console.log(err)
      return res.send(500, { error: err });
    }
    console.log(kitty, 'person, line 10');
    if (kitty.toJSON().Active) {
      res.send({ 'server': "http://35.236.92.7:3000" })
    } else { res.render('index', { title: 'Express' }); }
  });
});
module.exports = router;
