const initState = {
    authResponse:null
}

const AuthReducer = (state=initState, action) =>{
	switch(action.type){
		case 'SHORT_PASSWORD':
			return{
				...state,
				authResponse: 'Password is to short.'
			};
	    break;
	    case 'SIGNUP_SUCCESS':
			return{
				...state,
				authResponse: 'Your account is created successfully!.'
			};
		break;
		case 'SIGNUP_ERROR':
			return{
				...state,
				authResponse: 'There is a problem .Please try again later .'
			};
	    break;
	    default: return state;
	}
}