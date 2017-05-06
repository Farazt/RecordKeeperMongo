var _ = require('lodash');
var user = require('./user');
var bcrypt = require('bcrypt');
var validate=require('../../InputValidation/validate');

exports.index = function(req, res) {
	console.log("get call");
	user.find(function (err, users) {
	if(err) { 
		console.log("in error");
		console.log(err);
		return handleError(res, err); 
	}
	return res.json(200, users);
	});
};

exports.create = function(req, res) {
	console.log("In create");
	//ValidateInput
	var valid = validate.validateInput(req.body);
	if(valid.isValid){
		req.body.password=bcrypt.hashSync(req.body.password,10);
		user.create(req.body, function(err, user) {
		if(err) { return handleError(res, err); }
			return res.json(201, user);
		});
	}
	else{
		res.status(400).json(valid.errors);
	}
};


exports.update = function(req, res) {
	console.log("update call");
	if(req.body._id) { delete req.body._id; }
	user.findById(req.params.id, function (err, user) {
		if (err) { return handleError(res, err); }
		if(!user) { return res.send(404); }
		var updated = _.merge(user, req.body);
		updated.save(function (err) {
		if (err) { return handleError(res, err); }
			return res.json(200, user);
		});
	});
};


exports.delete = function(req, res) {
	console.log("delete call");
	user.findById(req.params.id, function (err, user) {
	if(err) { return handleError(res, err); }
	if(!user) { return res.send(404); }
	user.remove(function(err) {
	if(err) { return handleError(res, err); }
		return res.send(204);
	});
	});
};

function handleError(res, err) {
	return res.send(500, err);
};