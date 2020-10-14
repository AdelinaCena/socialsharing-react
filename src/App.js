import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
// Pages
import home from './pages/home';
import login from './pages/login';
import register from './pages/register';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80cbc4',
    },
    secondary: {
      main: '#ff8a80',
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
    		            <Route exact path="/" component={home} />
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
