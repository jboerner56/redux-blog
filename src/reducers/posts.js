import { ACTION_CREATE_POST } from '../actions'
import { generateId } from '../utils';
// reducer
// function that accepts current state and an action. 
// then calculates the next, new version of state.
export default function posts(state={}, action={type:''}) {
    switch (action.type) {
        case ACTION_CREATE_POST:
            // create a post
            const id = generateId();
            console.log(`new id is ${id}`);
            const newState = {
                ...state,
                // to use variable as key in an object literal, use square brackets
                // without the brackets it thinks the key is the string "id"
                [id]: action.payload
            };
            return newState;
            break;
        default:
        return state;
            break;
    }
}