var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
ActivityType: String,
ActivityLocation: String,
ActivityDistance: String,
ActivityDate: Number,
Duration: Number,
indoor:Boolean,
updated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('activity', activitySchema);