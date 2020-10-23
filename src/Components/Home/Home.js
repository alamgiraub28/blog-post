import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>({
  root:{
    height:150,
    background: '#FF8E53',
    textAlign:'center',
    margin:0,
    fontSize:50,
    paddingTop:80,
  },

}))


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => setPosts(data))
  }, [])
const classes = useStyles();
    return (
      
        <div>
        <h1 className ={classes.root}>Welcome to My Blog</h1>

        <div>
          
        </div>
        {
          posts.map(post => <Post post = {post}></Post>)
        }
        </div>
    );

    
};

export default Home;