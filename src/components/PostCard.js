import React from 'react';
// Material-ui core
import { Card, CardHeader, CardContent, Avatar, Typography } from '@material-ui/core'
// Material-ui core
import { makeStyles } from '@material-ui/core/styles';
// Material-ui icons
import EditIcon from '@material-ui/icons/Edit';
// Carusel file component
import Carusel from './Carusel';
// Dom router
import { Link } from 'react-router-dom';
// css
import '../css/post.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: '20px',
    backgroundColor: '#FFFFFF',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#000000',
  },
}));


export const PostCard = (props) => {
	const classes = useStyles();
    
    const loadPosts = props.posts;

    const authId = localStorage.getItem('user_id');
    
    return (
    <div>
    {loadPosts && loadPosts.hasOwnProperty('allPosts')? loadPosts.allPosts.map(row => (

	  <Card key= { row.id } className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {row.user.name.charAt(0)}
          </Avatar>
        }
        action={
            <div>
               {row.user.id == authId ? 
                    <Link to={'/posts/'+row.id} className="edit-icon">
                      <EditIcon ></EditIcon>
                    </Link>
                    : ''
                }
            </div>
        }
        title={row.title}
        subheader={row.created_at}
      />

        {row.media[0]? 
          <Carusel media={row}/> : null
        }
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { row.title } <br/>
          { row.text }
        </Typography>
      </CardContent>
    </Card>

    )) : null }
    </div>
    );
} 