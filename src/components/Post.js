import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: '20px'
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
    backgroundColor: red[500],
  },
}));


export const Post = (props) => {
	const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
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
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
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
      <CardActions disableSpacing>
        {row.user.id == authId ? 
        <Link to={'/posts/'+row.id}>
          <EditIcon ></EditIcon>
        </Link>
        : ''
        }
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{row.title}</Typography>
          <Typography paragraph>
              {row.text}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    )) : null }
    </div>
    );
} 