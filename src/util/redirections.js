import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component:Component, ...rest}) => (
    <Route {...rest } render={ props=>(
        localStorage.getItem('user') ?
        <Component {...props} />
        :<Redirect to={{pathname: '/login', state:{from:props.location}}} />

    )} />

);

export const Public = ({component:Component, ...rest}) => (
    <Route {...rest } render={ props=>(
        localStorage.getItem('user') ?
        <Redirect to={{pathname: '/', state:{from:props.location}}} />
        :
        <Component {...props} />

    )} />

);