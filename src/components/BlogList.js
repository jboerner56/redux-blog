import React from 'react';

export default function BlogList({posts}) {
    // function implicitly returns <li>
    const listItems = Object.values(posts).map(p =>  <li>{p.title}</li>)
    return (
        <ol>
            {listItems}
        </ol>
    )
}