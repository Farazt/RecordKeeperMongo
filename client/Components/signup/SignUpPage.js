import React from 'react';
import SignupForm from './SignUpForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';

class SignUpPage  extends React.Component {
	render(){
		const{userSignupRequest}= this.props;

		return(
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm userSignupRequest={userSignupRequest}/>
				</div>
			</div>
		);
	}
	
}

SignUpPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null,{userSignupRequest} )(SignUpPage) ;