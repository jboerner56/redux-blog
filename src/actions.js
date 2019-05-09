// actions

export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';

export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';

export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';

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
export function updatePost() {

}

export function deletePost(id) {
    return {
        type: ACTION_DELETE_POST,
        payload: {
            id
        }
    };
}
// just for when developing.
// comment out after everything is working
window.createPost = createPost
window.deletePost = deletePost