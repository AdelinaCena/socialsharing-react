const initState = {
	authenticated: false,
    authResponse: null
}

const AuthReducer = (state=initState, action) =>{
	switch(action.type){
		case 'SHORT_PASSWORD':
			return{
				...state,
				authResponse: 'Password is to short.'
			};
		case 'SIGNUP_SUCCESS':
			return{
				...state,
				authenticated:true,
				authResponse: 'Your account is created successfully!.'
			};
	    case 'CODE_ERROR':
			return{
				...state,
				authResponse: 'There seems to be a problem please try again later.'
			};
		case 'SIGNUP_ERROR':
			return{
				...state,
				authResponse: 'There is a problem .Please try again later .'
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
				authResponse: 'There is a problem with login check your credentials .'
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