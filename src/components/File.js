import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '200px',
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


export const File = (props) => {
    const classes = useStyles();
    const file = props.file
    const authId = localStorage.getItem('user_id');
    const onClick = () => {
        console.log(props.deleteFile); 
    }
    
    return (
    <div>
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={ file.url }
        title="Paella dish"
      />
        <CardActions disableSpacing>
            <button onClick={onClick}>
                <DeleteIcon ></DeleteIcon>
            </button>
        </CardActions>
    </Card>
    </div>
    );
} 

