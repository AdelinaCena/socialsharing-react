import React from 'react';
// Material-ui styles
import { makeStyles } from '@material-ui/core/styles';
// Material-ui core
import { Card, CardMedia, CardActions } from '@material-ui/core'
// Material-ui colors
import { red } from '@material-ui/core/colors';
// Actions
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '200px',
        marginBottom: '20px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export const File = (props) => {
    // card styles 
    const classes = useStyles();
    // file data 
    const file = props.file
    // handle delete action od a single file
    const onClickHandle = () => {
        props.data.deleteFile(file.id)
        setTimeout(function() {
            window.location.reload();
        }, 1500);
    }
    
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={ file.url }
                    title="Paella dish"/>

                <CardActions disableSpacing>
                      <button onClick={onClickHandle}>
                          <DeleteIcon ></DeleteIcon>
                      </button>
                </CardActions>
            </Card>
        </div>
    );
} 

