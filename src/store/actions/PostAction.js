import { AllPosts } from '../services/PostService';

export const getAllPosts = () => (dispatch) => {
	AllPosts().then(res => {
		if(res.success){
			console.log(res);
			dispatch({type:'LOAD_POSTS', res})
		}
	}

	).catch(error => {
		console.log(error)
		dispatch({type:'CODE_ERROR', error})
	});
		
}