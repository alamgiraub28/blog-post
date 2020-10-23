import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin:'auto',
    marginTop:20,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    textAlign:'center',
  },
  
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = (props) => {
    const classes = useStyles();
    const {title, id} = props.post;
    
    
    return (
        <div>
        
        <Card className={classes.root} variant="contained">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h3>{title}</h3>
        <Link to ={`/post/${id}`}> <button align="center">See More</button></Link>
        </Typography>
      </CardContent>
      
    </Card>
    
    
        </div>
        
    );
};

export default Post;