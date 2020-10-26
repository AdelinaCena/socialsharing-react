import React, { Component } from 'react';
// material-ui
import { TextField, Grid, Typography, Button} from '@material-ui/core';
// user image
import AppIcon from '../images/icon.png';
// router dom
import { Link } from 'react-router-dom';
// actions
import { loginUser } from '../store/actions/AuthAction';
// redux
import { connect } from 'react-redux'
// css
import '../css/login.css';

// custom style
const styles = (theme) => ({
  ...theme
});

class login extends Component {
	constructor(props)
	{
		super(props);
        this.state = {
        	email:"",
        	password:""
        }
	}
    
    // handles login user submit
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.loginUser(this.state, this.props.history);
	}
    
    // called every time a field changes
	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name] :e.target.value
		});
	}

	render() {
		// response from login action
		const { authResponse } = this.props;
		return(
			<Grid container className="styles.form">
			    <Grid item sm={4} xs={12}/>
				<Grid item sm={4} xs={12}>
					<div className="login">
					   <Typography variant="h3" className={styles.pageTitle}>
				            Login
			           </Typography>
			            <img src={AppIcon} alt="monkey" className="image" />
					    <form onSubmit={this.handleSubmit} className={styles.form} 
						    noValidate >
					        <TextField 
						        id="email" name="email" type="email" 
						        label="Email" className={styles.textField} 
						        fullWidth onChange={this.handleChange}/>
					        <TextField 
						        id="password" name="password" type="password"  
						        label="Password" className={styles.textField} 
						        fullWidth onChange={this.handleChange}/>
					        < div className="error-message"> {authResponse? authResponse.message : null }</div>
					        <Button
				                type="submit"
				                variant="contained"
				                color="secondary"
				                className="login-button">
				                    Login
				            </Button>
				            <br />
				            <small>
				                dont have an account ? sign up <Link to="/register">here</Link>
				            </small>
					    </form>
				    </div>
				</Grid>
				<Grid item sm={4} xs={12}/>
			</Grid>
	    );
	}
}

const mapStatesToProps = (state) => {
	return { 
	    authResponse:state.auth.authResponse
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser:(creds, history) => dispatch(loginUser(creds, history))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(login)