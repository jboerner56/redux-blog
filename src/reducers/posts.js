import { ACTION_CREATE_POST } from '../actions'
import { generateId } from '../utils';
import { ACTION_DELETE_POST } from '../actions';
import {ACTION_UPDATE_POST} from '../actions';
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
        case ACTION_DELETE_POST:
        const deleteState = {
            ...state
        };
            delete state[action.payload.id];
            return deleteState;
        case ACTION_UPDATE_POST: 
        const postToUpdate = state[action.payload.id];
        if(postToUpdate) {
            return {
                ...state,
                [action.payload.id]: {
                    title: action.payload.title || postToUpdate.title,
                    contents: action.payload.contents || postToUpdate.contents
                }
            }
        } else {
            return state
        }
        default:
        return state;
            break;
    }
}