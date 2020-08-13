var express = require('express');
var router = express.Router();
var Models = require('./../Models/mongooseModels');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.status(200).send({
    "amount": "19.84",
    "sold_at": "2016-09-07T10:54:28+10:00",
    "license": "Regular License",
    "support_amount": "0.00",
    "supported_until": "2017-03-09T01:54:28+11:00",
    "item": {
      "id": 17022701,
      "name": "SEO Studio - Professional Tools for SEO",
      "author_username": "baileyherbert",
      "updated_at": "2017-11-02T15:57:41+11:00",
      "site": "codecanyon.net",
      "price_cents": 2000,
      "published_at": "2016-07-13T19:07:03+10:00"
    },
    "buyer": "buyers_username",
    "purchase_count": 1
  })
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
