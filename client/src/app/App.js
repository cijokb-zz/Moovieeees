import React, { Component, Suspense } from 'react';
import { Route } from 'react-router-dom';
import AuthenticateRoute from '../authentication';
import './App.css';
import LoginContainer from '../login';


const MovieListContainer = React.lazy(() => import('../movie/MovieListContainer'));


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome user</h1>
        {
          //this.state.authenticated ? <button onClick={this.logout}>Logout</button> : null
        }
        <Suspense fallback={<div>Loading....</div>}>
          <AuthenticateRoute exact path="/" component={MovieListContainer} />
          <AuthenticateRoute component={MovieListContainer} path="/movies" />
          <Route exact path="/login" render={(props) => (<LoginContainer  {...props} />)} />
        </Suspense>
      </div >
    );
  }
}

export default App;
