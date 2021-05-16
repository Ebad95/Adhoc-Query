import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './Routes';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

class App extends Component {

  render() {
    return (
        <Router history={browserHistory}>
          <Routes />
        </Router>
    )
  }
}

export default App;