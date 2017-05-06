import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './Components/App';
import SignUpPage from './Components/signup/SignUpPage';
import Greetings from './Components/Greetings';
import LoginPage from './Components/login/LoginPage';
import NewEventPage from './Components/events/NewEventPage';
import requireAuth from './utils/requireAuth';
import DashBoardPage from './Components/events/DashBoardPage';



export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greetings}/>
		<Route path="signup" component={SignUpPage}/>
		<Route path="login" component={LoginPage}/>	
		<Route path="activity" component={requireAuth(NewEventPage)}/>	
		<Route path="dashboard" component={requireAuth(DashBoardPage)}/>	
		
	</Route>
)