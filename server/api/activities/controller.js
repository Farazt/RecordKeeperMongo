var _ = require('lodash');
var jwt    = require('jsonwebtoken');
var act = require('./model');

exports.allactivity = function(req, res) {
	console.log("get all user Activities call");
	act.find(function (err, acts) {
	if(err) { 
		console.log("in error");
		console.log(err);
		return handleError(res, err); 
	}
	return res.json(200, acts);
	});
};

exports.allactivityauth = function(req, res) {
	console.log("get Authenticated User Activities");
	var token = req.params.token;
	console.log("token:"+token);
	if (token) {

	    // verifies secret and checks exp
	    jwt.verify(token, "myTokenSecret", function(err, decoded) {      
	      if (err) {
	        return res.json({ success: false, message: 'Failed to authenticate token.' });    
	      } else {
	        req.decoded = decoded;    
	        act.find(function (err, acts) {
				if(err) { 
					console.log("in error");
					console.log(err);
					return handleError(res, err); 
				}
				return res.json(200, acts);
				});
	      }
	    });

  	}
};

exports.userActivities = function(req, res) {
	console.log("Find activities by Username");
	console.log("id:"+req.params.username);
	act.find({username : req.params.username}, function (err, acts) {
	if(err) { 
		console.log("in error");
		console.log(err);
		return handleError(res, err); 
	}
	return res.json(200, acts);
	});
};

exports.create = function(req, res) {
	console.log("Create activity");
	console.log(req.body);
	act.create(req.body, function(err, act) {
	if(err) { return handleError(res, err); }
		return res.json(201, act);
	});
};


exports.update = function(req, res) {
	console.log("Update activity");
	if(req.body._id) { delete req.body._id; }
	act.findById(req.params.id, function (err, act) {
		if (err) { return handleError(res, err); }
		if(!act) { return res.send(404); }
		var updated = _.merge(act, req.body);
		updated.save(function (err) {
		if (err) { return handleError(res, err); }
			return res.json(200, act);
		});
	});
};


exports.delete = function(req, res) {
	console.log("delete activity call");
	act.findById(req.params.id, function (err, act) {
	if(err) { return handleError(res, err); }
	if(!act) { return res.send(404); }
	act.remove(function(err) {
	if(err) { return handleError(res, err); }
		return res.send(200, "{success: true}");
	});
	});
};


function handleError(res, err) {
	return res.send(500, err);
};