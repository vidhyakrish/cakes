import React, { Component } from 'react';
import Request from 'superagent';


import Header from './Header';
import CakesList from './CakesList';
import Search from './Search';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '' };
  }

  componentWillMount () {

  }



  render() {
    return (
      <div className="App">
      <Header />
      <Search filterText={this.state.filterText}/>
      <CakesList />
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
      );
  }
}

export default App;
