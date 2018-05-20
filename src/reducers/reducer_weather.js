import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
	console.log('Actino received: ', action);
	console.log('state:', state );
	switch(action.type){
		case FETCH_WEATHER:
		  // return state.push(action.payload.data);
		  // concat does not change existing array but create a 
		  // new array contain all old content and new content 
		  return state.concat(action.payload.data);
		  // or can in following way (ES6)
		  // reutrn [ action.payload.data, ...state ];
	}
	return state;
}