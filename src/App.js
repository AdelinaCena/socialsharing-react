import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
// Pages
import home from './pages/home';
import login from './pages/login';
import register from './pages/register';
import {PrivateRoute} from './components/PrivateRoute';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#b71c1c',
    },
    
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <div className="App">
            <Router>
                <Navbar />
                <div className="container">
    	            <Switch>
                    <PrivateRoute exact path="/" component={home} />
    		            <Route exact path="/login" component={login} />
                    <Route exact path="/register" component={register} />
    	            </Switch>
                </div>
            </Router>
        </div>
    </MuiThemeProvider>
  );
}

export default App;
