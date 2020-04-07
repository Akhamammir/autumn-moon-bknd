var mongoose = require('mongoose');
var kittySchema = new mongoose.Schema({
  Name:{First:String, Last:String, Last2:String}, Birth:String, Gender:String,
  Curp:String, RFC:String, DateH:String, Pos:String, Phone:String, Emergency:String,
  Academic: String, Pwd: String, Usr:String
});
var ClientSchema = new mongoose.Schema({
  usr:{
    _id:{}, Name:{}, Team:Number, Pos:String
  }, razon:String, cName:String, rine:String, fiscal:String,
  workers:Boolean, curp:String, rfc:String, pPhys:Boolean, branch:Boolean,
  step:Number, extran:Boolean, phoneNum:String, show:Boolean, resultado:String,
  assigned:{}, branchAdd:[], arrayCon:[],arrayDatos:[],arrayActF:[] ,
  regFiscal:[], isn:String, rtp:String, cedular:String, ish:String,
  succList:[], contactList:[], repList:[]
});
module.exports = {
    Person : mongoose.model('UserList', new mongoose.Schema({}), 'Users' ),
    Client : mongoose.model('Clients', new mongoose.Schema({}), 'Clients' ),
    User: mongoose.model('User', kittySchema, 'Users'),
    Client: mongoose.model('Client', ClientSchema, 'Clients')
}