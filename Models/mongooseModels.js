var mongoose = require('mongoose');
var kittySchema = new mongoose.Schema({
  Name:{First:String, Last:String, Last2:String}, Birth:String, Gender:String,
  Curp:String, RFC:String, DateH:String, Pos:String, Phone:String, Emergency:String,
  Academic: String, Pwd: String, Usr:String
});
var ClientSchema = new mongoose.Schema({
  state:{}
});
module.exports = {
    Person : mongoose.model('UserList', new mongoose.Schema({}), 'Users' ),
    Client : mongoose.model('Clients', new mongoose.Schema({}), 'Clients' ),
    User: mongoose.model('User', kittySchema, 'Users'),
    Client: mongoose.model('Client', ClientSchema, 'Clients')
}