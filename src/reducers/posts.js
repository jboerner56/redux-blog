import { ACTION_CREATE_POST } from '../actions'
// reducer
// function that accepts current state and an action. 
// then calculates the next, new version of state.
export function posts(state={}, action={type:''}) {
    switch (action.type) {
        case ACTION_CREATE_POST:
            // create a post
            console.log('called create post');
            
            break;
        default:
        return state;
            break;
    }
}