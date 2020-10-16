import { SignUpService } from '../services/AuthService';
import { LoginService } from '../services/AuthService';

export const signUp = (credentials) => {
	return (dispatch) => {
		if (credentials.password.length < 6) {
			return dispatch({type: 'SHORT_PASSWORD'});
		}

		SignUpService(credentials).then(res => {
			console.log(res);

			if(res.token !== null){
				localStorage.setItem("user", 'Bearer '+ res.token);
				dispatch({type: 'SIGNUP_SUCCESS'});
			} else {
				dispatch({type:'SIGNUP_ERROR', res});
			}
		}

		).catch(error => {
			console.log(error)
			dispatch({type:'CODE_ERROR', error})
		});
		
	}
}


export const loginUser = (credentials, history) => {
	return (dispatch) => {
		if (credentials.password.length < 6) {

			return dispatch({type: 'SHORT_PASSWORD'});
		}

		LoginService(credentials, history).then(res => {
			console.log(res);

			if(res.token !== null){
				localStorage.setItem("user", 'Bearer'+res.token);
				dispatch({type: 'LOGIN_SUCCESS'});
				
	                history.push("/");     
			} else {
				dispatch({type:'LOGIN_ERROR', res});
			}
		}

		);
		
	}
}