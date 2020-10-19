import HttpService from './HttpService';

export const AllPosts = () => {
	const http = new HttpService();

	console.log(http);
	
	return http.getData('posts').then(data => {
		console.log(data);
		return data;
	}).catch(error => console.log(error));
}

export const CreatePost = (post) => {
	const http = new HttpService();
	
	return http.postData(post, 'posts').then(data => {
		console.log(data);
		return data;
	}).catch(error => console.log(error));
}

export const GetSinglePost = (postId) => {
	const http = new HttpService();
	
	return http.getData('posts/'+postId).then(data => {
		return data;
	}).catch(error => console.log(error));
}

export const UpdatePost = (post, postId) => {
	const http = new HttpService();
	
	return http.postData(post, 'posts/'+postId, 'PUT').then(data => {
		console.log(data);
		return data;
	}).catch(error => console.log(error));
}