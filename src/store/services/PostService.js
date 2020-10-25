import HttpService from './HttpService';

export const AllPosts = () => {
	const http = new HttpService();
	return http.getData('posts').then(data => {
		return data;
	}).catch(error => console.log(error));
}

export const CreatePost = (post) => {
	const http = new HttpService();
	
	return http.postFormData(post, 'posts').then(data => {
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
		return data;
	}).catch(error => console.log(error));
}

export const DeletePostById = (postID) => {
	const http = new HttpService();
	
	return http.postData(null,'posts/'+postID, 'DELETE').then(data => {
		return data;
	}).catch(error => console.log(error));
}

export const DeletePostFile = (fileId) => {
	const http = new HttpService();
	
	return http.postData(null,'files/'+fileId, 'DELETE').then(data => {
		return data;
	}).catch(error => console.log(error));
}


