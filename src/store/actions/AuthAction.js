import { SignUpService, LoginService, LogoutService } from '../services/AuthService';
import { Route, Redirect } from 'react-router-dom';

export const signUp = (credentials, history) => {
	return (dispatch) => {

		SignUpService(credentials, history).then(res => {
			console.log(res);

			if(res.success){
				localStorage.setItem("user", 'Bearer ' + res.token);
				localStorage.setItem("user_id", res.user_id);
				history.push("/");  
				dispatch({type: 'SIGNUP_SUCCESS', res});
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
		
		LoginService(credentials, history).then(res => {
			console.log(res);

			if(res.success){
				localStorage.setItem("user", 'Bearer ' + res.token);
				localStorage.setItem("user_id", res.user_id);
				dispatch({type: 'LOGIN_SUCCESS', res});
				
	                history.push("/");     
			} else {
				dispatch({type:'LOGIN_ERROR', res});
			}
		}

		);
		
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		LogoutService().then(res => {
			console.log(res);

			if(res.hasOwnProperty('success') && res.success){
				
				dispatch({type: 'LOGOUT_SUCCESS'});
				   
			} 
		}

		);
		
	}
}