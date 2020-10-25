import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import Carusel from './Carusel';
import { Link } from 'react-router-dom';
import '../css/post.css'
import DeleteIcon from '@material-ui/icons/Delete';

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


export const Post = (props) => {
	const classes = useStyles();
    
    const editPost = (props, postId) =>{
      props.history.push("posts/" + postId);
    }

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
                    <Link to={'/posts/'+row.id}>
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