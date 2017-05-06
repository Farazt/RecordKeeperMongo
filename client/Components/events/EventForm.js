import React from 'react';
import {connect} from 'react-redux';
import {createEvent} from '../../actions/eventActions';
import TextFieldGroup from '../common/TextFieldGroup';
import rcl from 'react-chart-all';
import Chart from 'chart.js';

class EventForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Duration: '',
			ActivityType : '',
			ActivityLocation : '',
			ActivityDistance : ' ',
			ActivityDate: '',
			errors: {},
			isLoading: false,
                  
		};
		this.onChange=this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onChange(e){
		this.setState( { [e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
            
		this.props.createEvent(this.state).then(
			(res) => {
			console.log(res)},
			(err) => {
				console.log(err)
			}
		);
	}
	
	render(){
      const{Duration,ActivityType,ActivityLocation,ActivityDistance,ActivityDate,errors,isLoading} =this.state;
      return(
   <div className="container ">
      <div className="row">
      <div className="col col-lg-6">
      	<form onSubmit={this.onSubmit}>
      		<h1> Enter Activities Details</h1>
      		<TextFieldGroup
      			field="ActivityType"
      			name="ActivityType"
      			value={this.state.ActivityType}
      			onChange={this.onChange}
      			errors={errors.ActivityType}
      			holdertext="Activity Type" />
      		<TextFieldGroup
      			field="ActivityLocation"
      			name="ActivityLocation"
      			value={this.state.ActivityLocation}
      			onChange={this.onChange}
      			errors={errors.ActivityLocation}
      			holdertext="Activity Location" />
      		<TextFieldGroup
      			field="ActivityDistance"
      			name="ActivityDistance"
      			value={this.state.ActivityDistance}
      			onChange={this.onChange}
      			errors={errors.ActivityDistance}
      			holdertext="Activity distance" />
      		<TextFieldGroup
      			field="ActivityDate"
      			name="ActivityDate"
      			value={this.state.ActivityDate}
      			onChange={this.onChange}
      			errors={errors.ActivityDate}
      			holdertext="Date" />
      		<TextFieldGroup
      			field="Duration"
      			name="Duration"
      			value={this.state.Duration}
      			onChange={this.onChange}
      			errors={errors.Duration}
      			holdertext="Duration" />

      		<button type="submit" className="btn btn-primary">Add Activity </button>
			</form>
		</div>
            <div className="col col-lg-6">
                  <h1> List of Activities Details</h1>
                              <ul className="list-group">
                                    <li className="list-group-item">Add Type of Activity</li>
                                    <li className="list-group-item">Location</li>
                                    <li className="list-group-item">Distance</li>
                                    <li className="list-group-item">See Cardio Blogs</li>
                                    <li className="list-group-item">Summary</li>
                              </ul>
                        </div>
			
			</div>
	  </div>
	
		);
	}

}

EventForm.PropTypes={
	createEvent: React.PropTypes.func.isRequired
}


export default connect(null, {createEvent})(EventForm);







