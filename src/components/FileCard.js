import React from 'react';
// Material-ui styles
import { makeStyles } from '@material-ui/core/styles';
// Material-ui core
import { 
    Card, CardMedia, CardActions, Button, 
    Dialog, DialogActions, DialogContent, 
    DialogContentText, DialogTitle
} from '@material-ui/core'

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

export const FileCard = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    // card styles 
    const classes = useStyles();
    // file data 
    const file = props.file
    // handle delete action od a single file
    const handleConfirm = () => {
        setOpen(false);
        props.data.deleteFile(file.id)
        setTimeout(function() {
            window.location.reload();
        }, 1500);
    }
    
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this file ?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    File will be deleted permanently.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
       
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={ file.url }
                    title="Paella dish"/>

                <CardActions disableSpacing>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        <DeleteIcon ></DeleteIcon>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
} 

