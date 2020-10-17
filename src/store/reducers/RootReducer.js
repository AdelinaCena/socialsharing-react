import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    post: PostReducer
})

export default RootReducer
