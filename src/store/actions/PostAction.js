import { AllPosts, GetSinglePost, CreatePost, UpdatePost } from '../services/PostService';

export const getAllPosts = () => (dispatch) => {
	AllPosts().then(res => {
		if(res.success){
			dispatch({type:'LOAD_POSTS', res})
		}
	}

	).catch(error => {
		console.log(error)
		dispatch({type:'CODE_ERROR', error})
	});
}

export const addPost = (postData) => (dispatch) => {
	CreatePost(postData).then(res => {
		if(res.success){
			dispatch({type:'ADD_POST', res})

			return res;
		}
	}

	).catch(error => {
		console.log(error)
		dispatch({type:'CODE_ERROR', error})
	});
}

export const getPost = (postId) => (dispatch) => {
	GetSinglePost(postId).then(res => {
		if(res.success){
			console.log('success')
			dispatch({type:'GET_SINGLE_POST', res})
		}
	}

	).catch(error => {
		console.log(error)
		dispatch({type:'CODE_ERROR', error})
	});
}

export const updatePost = (postData, postId) => (dispatch) => {
	UpdatePost(postData, postId).then(res => {
		if(res.success){
			console.log(res)
			dispatch({type:'UPDATE_POST', res})

			return res;
		}
	}

	).catch(error => {
		console.log(error)
		dispatch({type:'CODE_ERROR', error})
	});
}