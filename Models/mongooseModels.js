var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  Name:{First:String, Last:String, Last2:String}, Birth:String, Gender:String,
  Curp:String, RFC:String, DateH:String, Pos:String, Phone:String, Emergency:String,
  Academic: String, Pwd: String, Usr:String, team:String, email:String,
  EmergencyNam:String,
});
var ClientSchema = new mongoose.Schema({
  usr:{
    _id:{}, Name:{}, team:any, Pos:String
  }, razon:String, cName:String, team:String, rine:String, fiscal:String,
  workers:Boolean, curp:String, rfc:String, pPhys:Boolean, branch:Boolean,
  step:Number, extran:Boolean, phoneNum:String, show:Boolean, resultado:String,
  Resultado2:String,
  assigned:{}, branchAdd:[], arrayCon:[],arrayDatos:[],arrayActF:[] ,
  regFiscal:[], isn:String, rtp:String, cedular:String, ish:String,
  succList:[], contactList:[], repList:[]
}, {strict:false});
var kittySchema = new mongoose.Schema({
  API_KEY: String, active: Boolean
})
module.exports = {
    Person : mongoose.model('UserList', new mongoose.Schema({}), 'Users' ),
    User: mongoose.model('User', UserSchema, 'Users'),
    Client: mongoose.model('Client', ClientSchema, 'Clients'),
    Kitty: mongoose.model('Kitty', kittySchema, 'APIs')
}
