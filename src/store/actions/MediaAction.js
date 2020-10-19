export const addMediaToStore = (files) => (dispatch) => {
    console.log(files)
	dispatch({type:'LOAD_POSTS', files})
}
