import React from 'react';

const CommentDetail = (props) => {

    
    const { title, body } = props.comment;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default CommentDetail;