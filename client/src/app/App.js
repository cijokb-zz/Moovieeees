
import React, { Component, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, withRouter } from 'react-router-dom';
import AuthenticateRoute from '../authentication';
import './App.scss';
import LoginContainer from '../login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavBar } from '../common';

import { logout } from '../authentication/AuthActions';

const MovieContainer = React.lazy(() => import('../movie/MovieContainer'));
//const LoginContainer = React.lazy(() => import('../login/LoginContainer'));

type Props = {
  authenticated: boolean,
  logout: () => void
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar authenticated={this.props.authenticated} logout={this.props.logout} />
        </header>
        <main>
          <Container fluid={true}>
            <Row>
              <Suspense fallback={<div>Loading....</div>}>
                <Route exact path="/login" component={LoginContainer} />
                <AuthenticateRoute exact path="/" component={MovieContainer} authenticated={this.props.authenticated} />
                <AuthenticateRoute component={MovieContainer} path="/movies" authenticated={this.props.authenticated} />
              </Suspense>
            </Row>
          </Container>
        </main>
      </div>
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
