import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/icon.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { loginUser } from '../store/actions/AuthAction';
// redux
import { connect } from 'react-redux'
// css
import '../css/login.css';

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

	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.loginUser(this.state, this.props.history);
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name] :e.target.value
		});
	}

	render() {
		const { authResponse } = this.props;
		return(
			<Grid container className="styles.form">
			    <Grid item sm={4} xs={12}>
				</Grid>
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
			              className="login-button"
			            >
			              Login
			            </Button>
			            <br />
			            <small>
			              dont have an account ? sign up <Link to="/signup">here</Link>
			            </small>

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
		loginUser:(creds, history) => dispatch(loginUser(creds, history))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(login)