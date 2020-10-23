const initState = {
	authenticated: false,
    authResponse: null
}

const AuthReducer = (state=initState, action) =>{
	switch(action.type){
		case 'SIGNUP_SUCCESS':
			return{
				...state,
				authenticated:true,
				authResponse: action.res
			};
	    case 'CODE_ERROR':
			return{
				...state,
				authResponse: 'There seems to be a problem please try again later.'
			};
		case 'SIGNUP_ERROR':
			return{
				...state,
				authResponse: action.res
			};
		case 'LOGIN_SUCCESS':
			return{
				...state,
				authenticated:true,
				authResponse: 'Login  successfully!. Redirecting you to home.'
			};
		case 'LOGIN_ERROR':
			return{
				...state,
				authResponse: action.res
			};
		case 'LOGOUT_SUCCESS':
			return{
				...state,
				authResponse: 'Logout successfully! .'
			};
	    default: return state;
	}
}

export default AuthReducer