var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  Name:{First:String, Last:String, Last2:String}, Birth:String, Gender:String,
  Curp:String, RFC:String, DateH:String, Pos:String, Phone:String, Emergency:String,
  Academic: String, Pwd: String, Usr:String
});
var ClientSchema = new mongoose.Schema({}, {strict:false});
var kittySchema = new mongoose.Schema({
  API_KEY: String, active: Boolean
})
module.exports = {
    Person : mongoose.model('UserList', new mongoose.Schema({}), 'Users' ),
    User: mongoose.model('User', UserSchema, 'Users'),
    Client: mongoose.model('Client', ClientSchema, 'Clients'),
    Kitty: mongoose.model('Kitty', kittySchema, 'APIs')
}