import HttpService from './HttpService';

export const AllPosts = () => {
	const http = new HttpService();

	console.log(http);
	
	return http.getData('posts').then(data => {
		console.log(data);
		return data;
	}).catch(error => console.log(error));
}