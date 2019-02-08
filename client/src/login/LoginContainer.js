
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Login from './Login';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../authentication/AuthActions';

type State = {
    username: string,
    password: string
};

type LoginType = (username: string, password: string) => void;

type Props = {
    authenticated: boolean,
    authError: boolean,
    login: LoginType
};


class LoginContainer extends Component<Props, State> {
    handleChange: () => void;
    handleSubmit: () => void;
    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleSubmit() {
        this.props.login(this.state.username, this.state.password);
    }

    //handling keyboard input for login details
    handleChange(e: SyntheticInputEvent<HTMLInputElement>) {
        const stateObject = this.state;
        stateObject[e.target.name] = e.target.value;
        this.setState(stateObject);
    }
    render() {
        if (this.props.authenticated) {
            return <Redirect to="/movies" />
        }
        return (
            <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange} error={this.props.authError} />
        );
    }
};


function mapStateToProps({ user }: { user: { authenticated: boolean, authError: boolean } }): Object {
    return {
        authenticated: user.authenticated,
        authError: user.authError
    }
}
function mapDispatchToProps(dispatch: () => void): Object {
    return {
        login: bindActionCreators(login, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);