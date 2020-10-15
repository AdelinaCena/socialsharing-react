import HttpService from './HttpService';

export const SignUpService = (credentials) => {
	const http = HttpService();
	console.log(HttpService);
	return http.postData(credentials, register).then(data=>{
		console.log(JSON.stringify(data));
		return data;
	}).catch(error=> console.log(error));
}