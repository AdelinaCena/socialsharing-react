export const addMediaToStore = (files) => (dispatch) => {
    console.log(files)
	localStorage.setItem("file", files);
	dispatch({type:'LOAD_POSTS', files})
}
