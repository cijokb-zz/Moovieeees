import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Login from './Login';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: null,
            password: null,
            authenticated: localStorage.getItem("userToken") || false,
            error: false
        }
    }

    handleSubmit() {

        if (this.state.username === "test" && this.state.password === "1234") {
            console.log("loign sucessfull");
            localStorage.setItem("userToken", "123456");
            this.setState({ authenticated: true });
        }
        else {
            this.setState({ error: true });
            console.log("login failed :  Invalid user");
        }
    }

    //handling keyboard input for login details
    handleChange(e) {
        const stateObject = this.state;
        stateObject[e.target.name] = e.target.value;
        this.setState(stateObject);
    }
    render() {
        if (this.state.authenticated) {
            return <Redirect to="/movies" />

        }
        return (
            <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange} error={this.state.error} />
        );
    }
};

export default LoginContainer;