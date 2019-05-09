import {
    combineReducers,
    createStore
} from 'redux'

import posts from './reducers/posts';

// pass an object to combineReducers.
// this object should be shaped like your state
const rootReducer = combineReducers({
    posts: posts
});

const store = createStore(rootReducer);
export default store;

