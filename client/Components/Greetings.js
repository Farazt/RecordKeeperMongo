import React from 'react';


class Greetings  extends React.Component {
	render(){
		return(
			<div >
			<div className="jumbotron">
			
				<h1>Activity Recorder!</h1>
    			<p>Activity Recorder Helps keep record of your daily Activities and summarises it for you. If you need to remain fit or otherwise keep yourself
    			balanced just sign up with us.</p>
    			<p><button type="submit" className="btn btn-primary">Learn More About Us </button></p>		

			</div>
			<div className="row">
				<div className="col col-lg-6">
      				<ul className="list-group">
						<li className="list-group-item">Diet Track</li>
 				 		<li className="list-group-item">Distance Covered in weeks</li>
 				 		<li className="list-group-item">Distance Covered in month</li>
  				  		<li className="list-group-item">Excercise Type</li>
 				 		<li className="list-group-item">Location</li>
					</ul>
				</div>

				<div className="col col-lg-6">
      				<ul className="list-group">
						<li className="list-group-item">Tracking Activities</li>
 				 		<li className="list-group-item">Follow Friends</li>
 				 		<li className="list-group-item">See Cardio blogs</li>
  				  		<li className="list-group-item">Fitness Tips</li>
 				 		<li className="list-group-item">Summary</li>
					</ul>
				</div>
			</div>


			</div>
		);
	}
	
}

export default Greetings ;