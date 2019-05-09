import {
    combineReducers,
    createStore
} from 'redux'

import posts from './reducers/posts';
import selectedId from './reducers/selectedId';
const frequency = 2000
const LS_KEY = 'blog storage'



// pass an object to combineReducers.
// this object should be shaped like your state
const rootReducer = combineReducers({
    posts: posts,
    selectedId: selectedId
});

// check local storage for any previously saved app state
// if there is, pass as second argument to createStore


let initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};
const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
// auto save what is in state every 2 seconds to local storage
    let saveInterval = setInterval(() => {
        const state = store.getState();
        localStorage.setItem(LS_KEY, JSON.stringify(state));
    }, frequency)

export default store;

