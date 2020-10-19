import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
// Pages
import home from './pages/home';
import login from './pages/login';
import register from './pages/register';
import create from './pages/post/create';
import edit from './pages/post/edit'
import { Unauthorized, PrivateRoute } from './util/redirections';

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
    		            <Unauthorized exact path="/login" component={login} />
                    <Unauthorized exact path="/register" component={register} />
                    <PrivateRoute exact path="/posts/create" component={create} />
                    <PrivateRoute exact path="/posts/:post" component={edit} />
                    <Route exact path="/logout" />
    	            </Switch>
                </div>
            </Router>
        </div>
    </MuiThemeProvider>
  );
}

export default App;
