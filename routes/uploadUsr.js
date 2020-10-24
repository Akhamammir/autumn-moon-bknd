var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('../Models/mongooseModels');
router.post('/', function(req, res, next) {
  let state = req.body.state;
  Models.User.findOneAndUpdate({_id: req.body.state._id == '0' ? mongoose.Types.ObjectId() : req.body.state._id},
      {
        Name:{First:state.name, Last:state.nameFather, Last2:state.nameMother},
        Birth:state.birthday,
        Gender:state.gender, Curp:state.curp,
        RFC: state.rfc, DateH:state.dateHire, email:state.email,
        Pos:state.position, Phone:state.phoneNum, team:state.Team,
        Emergency:state.emergencyNum, Academic:state.academic,
        Pwd:state.password, Usr:state.name[0]+state.nameFather[0]+state.nameMother,
        EmergencyNam:state.EmergencyNam
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
