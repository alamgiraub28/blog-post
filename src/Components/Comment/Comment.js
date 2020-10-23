import React from 'react';
import Images from '../Images/Images';
import CSS from '../Images/Images.css';





const Comment = (props) => {
    const {name, email, body} = props.comment;
  
    const postStyle ={
        border: '1px solid green',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px',
        display: 'flex',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }

    return (
        <div style={postStyle}>

        <div><img className="image-option" src="https://via.placeholder.com/600/92c952" alt=""/></div>
        
            <div className="content">
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
    
        </div>
        </div>
        
    );
};

export default Comment;