const initState = {
    postResponse:null,
	loadPosts:null,
	post: {
		title: '',
		text: '',
	},
	media: []
}

const PostReducer = (state = initState, action) => {
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
		case 'ADD_POST':
			return state.concat([action.data]);
		case 'GET_SINGLE_POST':
			return {
				...state,
				post: action.res.post
			};
		case 'MEDIA_STORE':
			return{
			...state,
			media: state.media.push(action.file)
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