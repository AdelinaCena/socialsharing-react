import { AddFileToPost, DeletePostFile } from '../services/PostService';

export const addMediaToStore = (files) => (dispatch) => {
	localStorage.setItem("file", files);
	dispatch({type:'LOAD_MEDIA', files})
}

export const addFile = (files) => (dispatch) => {
	AddFileToPost(files).then(res => {
		if(res.success){
			dispatch({type:'ADD_FILE', res})
			return res;
		}
	}).catch(error => {
		dispatch({type:'CODE_ERROR', error})
	});
}

export const deleteFile = (fileId) => (dispatch) => {
	DeletePostFile(fileId).then(res => {
		if(res.success){
			dispatch({type:'DELETE_FILE', res})
			return res;
		}
	}).catch(error => {
		dispatch({type:'CODE_ERROR', error})
	});
}

