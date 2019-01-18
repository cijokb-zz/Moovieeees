import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Login from './Login';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../authentication/AuthActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: null,
            password: null
        }
    }

    handleSubmit() {
        this.props.login(this.state.username, this.state.password);
    }

    //handling keyboard input for login details
    handleChange(e) {
        const stateObject = this.state;
        stateObject[e.target.name] = e.target.value;
        this.setState(stateObject);
    }
    render() {
        if (this.props.authenticated) {
            return <Redirect to="/movies" />

        }
        return (
            <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange} error={this.props.error} />
        );
    }
};


function mapStateToProps({ user }) {
    return {
        authenticated: user.authenticated,
        authError: user.authError
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);