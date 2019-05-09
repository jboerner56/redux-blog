import {ACTION_SELECT_POST} from '../actions';

export default function selectedId(state='', action={type:''}) {
    switch (action.type) {
        case ACTION_SELECT_POST:
            return action.payload
        default:
        return state;
    }
}