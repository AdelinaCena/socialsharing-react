import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
 *Guard function 
 * Authenticated routes
 *
*/
export const PrivateRoute = ({component:Component, ...rest}) => (
    <Route {...rest } render={ props=>(
        localStorage.getItem('user') ?
        <Component {...props} />
        :<Redirect to={{pathname: '/login', state:{from:props.location}}} />
    )} />
);

/*
 *Guard function
 *Prevent authenticated user to go to 
 *login & register page
*/
export const Public = ({component:Component, ...rest}) => (
    <Route {...rest } render={ props=>(
        localStorage.getItem('user') ?
        <Redirect to={{pathname: '/', state:{from:props.location}}} />
        :
        <Component {...props} />
    )} />
);