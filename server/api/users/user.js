var mongoose = require('mongoose');


var customerSchema = new mongoose.Schema({
username: String,
password:String,
email: String,
updated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('customer', customerSchema);