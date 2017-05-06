import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


export default function validateInput(data){
	let errors={};
	if(Validator.isNull(data.identifier)){
		errors.identifier='Field Required'
	}
	if(Validator.isNull(data.password)){
		errors.identifier='Field Required'
	}



	return{
		errors,
		isValid: isEmpty(errors)

	}

}

