import React, { Component } from 'react';
// material-ui
import { TextField, Grid, Typography, Button } from '@material-ui/core';
// user image
import AppIcon from '../images/icon.png';
// link
import { Link } from 'react-router-dom';
// actions
import { signUp } from '../store/actions/AuthAction';
// redux
import { connect } from 'react-redux'
// css
import '../css/login.css';

const styles = (theme) => ({
  ...theme
});

class register extends Component {
	constructor(props)
	{
		super(props);
        this.state = {
        	name:"",
        	email:"",
        	password:"",
        	password_confirmation:"",
        }
	}
    
    // handles user registration
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.signUp(this.state, this.props.history);
		console.log(this.props)
	}
    
    // called every time a field changes
	handleChange = (e) => {
		this.setState({
			[e.target.name] :e.target.value
		});
	}

	render() {
		const { authResponse } = this.props;
		return(
			<Grid container className="styles.form">
			    <Grid item sm={4} xs={12}/>
				<Grid item sm={4} xs={12}>
					<div className="login">
					    <Typography variant="h3" className={styles.pageTitle}>
				            Register
			            </Typography>
			            <img src={AppIcon} alt="monkey" className="image" />
					    <form onSubmit={this.handleSubmit} className={styles.form} >
				        
					        <TextField 
					            id="name" name="name" type="text" 
					            label="Name" className={styles.textField} 
					            fullWidth onChange={this.handleChange}/>

					        <TextField 
					            id="email" name="email" type="email" 
					            label="Email" className={styles.textField} 
					            fullWidth onChange={this.handleChange}/>
					        
					        <TextField 
						        id="password" name="password" type="password"  
						        label="Password" className={styles.textField} 
						        fullWidth onChange={this.handleChange}/>
					        
					        <TextField 
						        id="password_confirmation" name="password_confirmation" 
						        type="password" label="Confirm Password" 
						        className={styles.textField} fullWidth
						        onChange={this.handleChange}/>

					        <Button
				                type="submit"
				                variant="contained"
				                color="secondary"
				                className="login-button">
				                    Register
				            </Button>
				            <br />
				            <small>
				                dont have an account ? sign up <Link to="/login">here</Link>
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
		signUp:(creds, history) => dispatch(signUp(creds, history))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(register)