const initState = {
    postResponse:null,
    loadPosts:null
}


const PostReducer = (state=initState, action) =>{
	switch(action.type){
		case 'NEW_POST_SUCCESS':
			return{
				...state,
				postResponse: 'Your post  is created successfully!.'
			};
	    case 'NEW_POST_ERROR':
			return{
				...state,
				postResponse: 'There seems to be a problem please try again later.'
			};
		case 'LOAD_POSTS':
		    console.log(action.res);
			return{
				...state,
				loadPosts: action.res
			};
	    default: return state;
	}
}

export default PostReducer