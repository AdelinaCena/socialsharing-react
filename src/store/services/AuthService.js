import HttpService from './HttpService';

export const SignUpService = (credentials) => {
	const http = new HttpService();

	console.log(http);
	
	return http.postData(credentials, 'signup').then(data => {
		console.log(data)
		return data;
	}).catch(error => console.log(error));
}

export const LoginService = (credentials, propsHistory) => {
	const http = new HttpService();

	console.log(HttpService);
	
	return http.postData(credentials, 'login', propsHistory).then(data => {
		console.log(data);
		console.log('data');
		return data;
	}).catch(error => console.log(error));
}