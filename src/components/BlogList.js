import React from 'react';

export default function BlogList({posts, handleClick}) {
    // function implicitly returns <li>
    // const listItems = Object.values(posts).map(p =>  <li>{p.title}</li>)

    // if we want the id's as well as the blog posts
    // get an array of the id's (using Object.keys)
    // then map over the array
    // with each id, we can access the blog post in the posts object
    const listItems = Object.keys(posts).map(id => {
        const theBlogPost = posts[id];
        return <li onClick={() => {
            handleClick(id);
        }}>{theBlogPost.title} - {id}</li>
    });
    return (
        <ol>
            {listItems}
        </ol>
    );
}