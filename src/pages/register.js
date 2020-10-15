import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/icon.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// css
import '../css/login.css';

const styles = (theme) => ({
  ...theme
});

class register extends Component {
	render() {
		return(
			<Grid container spacing={16} className="styles.form">
			    <Grid item sm={4} xs={12}>
				</Grid>
				<Grid item sm={4} xs={12}>
					<div className="login">
					   <Typography variant="h3" className={styles.pageTitle}>
			            Register
			          </Typography>
			           <img src={AppIcon} alt="monkey" className="image" />
					    <form className={styles.form} noValidate autoComplete="off">
				        <TextField id="name" name="name" type="text" label="Name" className={styles.textField} fullWidth/>
				        <TextField id="email" name="email" type="email" label="Email" className={styles.textField} fullWidth/>
				        <TextField id="password" name="password" type="password"  label="Password" className={styles.textField} fullWidth/>
				        <TextField id="confirm_password" name="confirm_password" type="password" label="Confirm Password" className={styles.textField} fullWidth/>
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

export default register