import React from 'react'



export default function BlogDetail ({post}) {
    return(
        // if theres is a post return post.
        post ? (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            // if there is no post return null (nothing)
        ) : null
    );
}