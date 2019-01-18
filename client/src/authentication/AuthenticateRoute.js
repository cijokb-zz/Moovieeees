import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticateRoute = ({ component: Component, ...rest }) => {
    //const userToken = window.localStorage.getItem("userToken");
    return (
        <Route {...rest} render={(props) => {
            return (rest.authenticated && rest.authenticated === true) ? <Component {...props} /> : <Redirect to="/login" />;
        }} />
    );
}

export default AuthenticateRoute;