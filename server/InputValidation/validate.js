
var Validator=require('validator');
var isEmpty = require('lodash/isEmpty');

exports.validateInput= function (data){
	var errors={};
	if(!Validator.isEmail(data.email)){
		errors.email= 'This field is required';
	}
   if(!Validator.equals(data.password,data.passwordConfirmation)){
		errors.passwordConfirmation='Password Dont Match';
	}
	

	return{
		errors,
		isValid: isEmpty(errors)
	}
};
