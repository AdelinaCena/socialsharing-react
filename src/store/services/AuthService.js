import HttpService from './HttpService';

// Signup helper function
export const SignUpService = (credentials, propsHistory) => {
	const http = new HttpService();
	return http.postData(credentials, 'auth/signup', 'POST', propsHistory).then(data => {
		return data;
	}).catch(() => console.log("Can’t access  response. Blocked by browser?"));
}

// Login authenticate helper function
export const LoginService = (credentials, propsHistory) => {
	const http = new HttpService();
	return http.postData(credentials, 'auth/login', 'POST', propsHistory).then(data => {
		return data;
	}).catch(() => console.log("Can’t access  response. Blocked by browser?"));
}

// Logout helper function
export const LogoutService = (credentials) => {
	const http = new HttpService();
	return http.getData('/logout').then(data => {
		return data;
	}).catch(() => console.log("Can’t access  response. Blocked by browser?"));
}