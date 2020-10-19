import HttpService from './HttpService';

export const SignUpService = (credentials, propsHistory) => {
	const http = new HttpService();

	console.log(http);
	
	return http.postData(credentials, 'auth/signup', 'POST', propsHistory).then(data => {
		console.log(data)
		return data;
	}).catch(() => console.log("Can’t access  response. Blocked by browser?"))
;
}

export const LoginService = (credentials, propsHistory) => {
	const http = new HttpService();

	console.log(HttpService);
	
	return http.postData(credentials, 'auth/login', 'POST', propsHistory).then(data => {
		console.log(data);
		console.log('data');
		return data;
	}).catch(() => console.log("Can’t access  response. Blocked by browser?"))
;
}

export const LogoutService = (credentials) => {
	const http = new HttpService();

	console.log(HttpService);
	
	return http.getData('/logout').then(data => {
		console.log(data);
		console.log('data');
		return data;
	}).catch(() => console.log("Can’t access  response. Blocked by browser?"))
;
}