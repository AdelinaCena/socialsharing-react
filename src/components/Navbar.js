import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { logoutUser } from '../store/actions/AuthAction';
import { connect } from 'react-redux'

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

    const handleSubmit = (props) => {
        const token = localStorage.removeItem('user'); 
        const userId= localStorage.removeItem('user_id');

        window.open('/', '_self')

        // console.log(props);

        // props.history.push('/');
    }

	const classes = useStyles();

  const hasUser = localStorage.getItem('user');


    return(
        <div className="appbar">
	        <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className="appbar"> Social Sharing </Link>
                    </Typography>

                    { hasUser ? 
                        <Button type="submit" className="appbar" onClick={handleSubmit}>
                            LogOut
                        </Button>
                    :
                    <>
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