import React from 'react';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			username : '',
			email : '',
			password : ' ',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e){
		this.setState({errors:{} , isLoading:true});
		e.preventDefault();
		this.props.userSignupRequest(this.state).then(
			()=> {
				this.context.router.push('/');
			},
			({data}) => this.setState({errors:data, isLoading:false})
		);
	}
		

	render(){
		const{errors}= this.state;
		return(
			
			<form onSubmit={this.onSubmit}>
			 <h1>Keep your records with us.</h1>
			
			 <TextFieldGroup
				holdertext="username"
				field="username"
				value={this.state.username}
				label="Username"
				error={errors.username}
				type="text"
				onChange={this.onChange}
			/>
			 <TextFieldGroup
			 	holdertext="Email"
				field="email"
				value={this.state.email}
				label="Email"
				error={errors.email}
				type="text"
				onChange={this.onChange}
				
				/>
			 <TextFieldGroup
			 	holdertext="password"
			 	field="password"
				value={this.state.password}
				label="Password"
				error={errors.password}
				type="password"
				onChange={this.onChange}
				/>
			 <TextFieldGroup
			 	holdertext="confirm Password"
			 	field="passwordConfirmation"
			 	value={this.state.passwordConfirmation}
				label="Password Confirmation"
				error={errors.passwordConfirmation}
				type="password"
				onChange={this.onChange}
			  />

			<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
						Sign Up
					</button>
			</div>
			</form>
			
			);
		}

}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}
	
SignupForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}
 export default SignupForm;
