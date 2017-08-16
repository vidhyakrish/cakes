import React, { Component } from 'react';
import Home from './Home';
import Add from './Add';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import './styles/App.css';
import './styles/layout.css';

class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Router history={hashHistory}>
      <Route path='/' component={Home} />
      <Route path='/add' component={Add} />
      </Router>
      );
  }
}

export default App;
