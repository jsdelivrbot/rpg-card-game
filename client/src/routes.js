import React from 'react';
import { Route, IndexRoute } from 'react-router';


/* -------------- Components --------------- */
import App from './components/app';
import Login from './containers/user/Login';
import Register from './containers/user/Register';
import Portal from './containers/Portal/Portal';

/* -------------- Routes Paths --------------- */
export const ROOT = "/";
export const REGISTER = "/register";
export const PORTAL = "/portal";


export default (
    <Route path={ROOT} component={App} >
        <IndexRoute component={Login} />
        <Route path={REGISTER} component={Register} />
        <Route path={PORTAL} component={Portal} />
    </Route>
);



