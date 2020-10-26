import { 
	AllPosts, 
	GetSinglePost, 
	CreatePost, 
	UpdatePost, 
	DeletePostById,  
} from '../services/PostService';

export const getAllPosts = () => (dispatch) => {
	AllPosts().then(res => {
		if(res.success){
			dispatch({type:'LOAD_POSTS', res})
		}
	}
	).catch(error => {
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
		dispatch({type:'CODE_ERROR', error})
	});
}

export const getPost = (postId) => (dispatch) => {
	GetSinglePost(postId).then(res => {
		if(res.success){
			dispatch({type:'GET_SINGLE_POST', res})
		}
	}

	).catch(error => {
		dispatch({type:'CODE_ERROR', error})
	});
}

export const updatePost = (postData, postId) => (dispatch) => {
	UpdatePost(postData, postId).then(res => {
		if(res.success){
			dispatch({type:'UPDATE_POST', res})

			return res;
		}
	}

	).catch(error => {
		dispatch({type:'CODE_ERROR', error})
	});
}

export const deletePost = (postId) => (dispatch) => {
	DeletePostById(postId).then(res => {
		if(res.success){
			dispatch({type:'DELETE_POST', res})
			return res;
		}
	}
	
	).catch(error => {
		dispatch({type:'CODE_ERROR', error})
	});
}

