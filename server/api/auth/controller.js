var _ = require('lodash');
var jwt    = require('jsonwebtoken');

exports.authuser = function(req, res) {
	console.log("create token call");
	console.log(req.body);
	var user = {
		username:"ftahir",
		password:"ftahir"
	};
	if(req.body.identifier == user.username && req.body.password == user.password) {
		var token = jwt.sign(user, "myTokenSecret", {
	          expiresIn: '1h' 
	        });

	       
	        res.json({
	          success: true,
	          message: 'Token Created Succesfully',
	          token: token
	        });
	} else {
		res.json({
	          success: false,
	          message: 'Username or password does not match!'
	        });
	}
	return res;
};


function handleError(res, err) {
	return res.send(500, err);
};