// actions

export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';

export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';

export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';
export const ACTION_SELECT_POST = 'ACTION_SELECT_POST'

// actin creators

export function createPost(payload) {
    // assumes the payload argument looks like this
    // {
        // title: 'some title',
        // content: 'some content'
    // }
    return {
        type: ACTION_CREATE_POST,
        payload
    }
}
export function updatePost(id, payload) {
    return {
        type: ACTION_UPDATE_POST,
        payload: {
            id, 
            ...payload
        }
    };
}

export function deletePost(id) {
    return {
        type: ACTION_DELETE_POST,
        payload: {
            id
        }
    };
}

export function selectPost (id) {
    return {
        type: ACTION_SELECT_POST,
        payload: id
    }
}
// just for when developing.
// comment out after everything is working
window.createPost = createPost
window.deletePost = deletePost
window.updatePost = updatePost
window.selectPost = selectPost