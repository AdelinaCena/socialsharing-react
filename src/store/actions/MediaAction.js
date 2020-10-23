export const addMediaToStore = (files) => (dispatch) => {
	localStorage.setItem("file", files);
	dispatch({type:'LOAD_MEDIA', files})
}
