export default function routeReducer (state = {}, action) {
	switch (action.type) {
		case 'ROUTER_WELCOME': return {
	    	...state,
	    	welcome: action,
		}
		case 'ROUTER_NEW_PROYECT': return {
	    	...state,
	    	newProyect: action,
	  	}
	  	default: return state;
	}
}