import axios from 'axios';


export function createEvent(events){
	return dispatch =>{
		return axios.post('/api/activities',events);
	}

}