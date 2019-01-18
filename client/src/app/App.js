import React, { Component, Suspense } from 'react';
import { Route, withRouter } from 'react-router-dom';
import AuthenticateRoute from '../authentication';
import './App.css';
import LoginContainer from '../login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../authentication/AuthActions';

const MovieContainer = React.lazy(() => import('../movie/MovieContainer'));


class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <h1>Welcome user</h1>
        {
          this.props.authenticated ? <button onClick={this.props.logout}>Logout</button> : null
        }
        <Suspense fallback={<div>Loading....</div>}>
          <Route exact path="/login" component={LoginContainer} />
          <AuthenticateRoute exact path="/" component={MovieContainer} authenticated={this.props.authenticated} />
          <AuthenticateRoute component={MovieContainer} path="/movies" authenticated={this.props.authenticated} />
        </Suspense>
      </div >
    );
  }
}

function mapStateToProps({ user }) {
  return {
    authenticated: user.authenticated
  }
}
function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
