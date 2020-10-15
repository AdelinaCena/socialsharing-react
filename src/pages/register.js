import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/icon.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        	confirm_password:"",
        }
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.signUp(this.state);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] :e.target.value
		});
	}

	render() {
		return(
			<Grid container className="styles.form">
			    <Grid item sm={4} xs={12}>
				</Grid>
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
						        id="confirm_password" name="confirm_password" 
						        type="password" label="Confirm Password" 
						        className={styles.textField} fullWidth
						        onChange={this.handleChange}/>

					        <Button
				              type="submit"
				              variant="contained"
				              color="secondary"
				              className="login-button"
				            >
				              Register
				            </Button>
					    </form>
				    </div>
				</Grid>
				<Grid item sm={4} xs={12}>
				</Grid>
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
		signUp:(creds) => dispatch(signUp(creds))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(register)