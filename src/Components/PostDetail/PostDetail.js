import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>({
    root:{
      height:150,
      background: '#FF8E53',
      textAlign:'center',
      margin:0,
      paddingTop:50,
      
    },
  
  }))

const PostDetail = () => {
    const classes = useStyles();

    const {postId} = useParams();
    const [post, setPost] = useState({});
    

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));

    }, [])

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data));

    }, []);


    return (
        <div>
            <div className={classes.root}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
            
            
            {
                comments.map(comment => <Comment comment ={comment}></Comment>)
            }
            
            
        </div>
    );
};

export default PostDetail;