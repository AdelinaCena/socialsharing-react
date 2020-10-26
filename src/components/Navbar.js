import React from 'react';
// Material-ui styles
import { makeStyles } from '@material-ui/core/styles';
// Material-ui core
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
// Material-ui menu icons
import MenuIcon from '@material-ui/icons/Menu';
// Dom Router
import { Link } from 'react-router-dom';
// actions
import { logoutUser } from '../store/actions/AuthAction';
// redux
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Navbar = (props) => {
    // handle logout action
    const handleSubmit = (props) => {
        localStorage.removeItem('user'); 
        localStorage.removeItem('user_id');
        window.open('/', '_self')
    }
    // navbar custom style
  	const classes = useStyles();
    // check if user is logedd in from user storage
    const hasUser = localStorage.getItem('user');

    return(
        <div className="appbar">
  	        <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" className={classes.menuButton} 
                        color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className="appbar"> 
                            Social Sharing 
                        </Link>
                    </Typography>

                    { hasUser ? 
                            <Button type="submit" className="appbar" onClick={handleSubmit}>
                                LogOut
                            </Button>
                    :   <>
                            <Link to="/login" className="appbar">
                                <Button color="inherit">Login</Button>
                            </Link>
                            <Link to="/register" className="appbar">
                                <Button color="inherit">Register</Button>
                            </Link> 
                        </>
                    }

                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStatesToProps = (state) => {
    return { 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    logoutUser:() => dispatch(logoutUser())
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Navbar)