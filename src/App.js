import React, { Component } from 'react';
import Request from 'superagent';


import Header from './Header';
import CakesList from './CakesList';
import Search from './Search';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '', cakes :[]};

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);



  }

  getAllCakes(){
    var url = 'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json'
    fetch(url)
    .then(res => res.json())
    .then(cakes => this.setState({ cakes }));
  }

  componentWillMount () {
    this.getAllCakes();
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });

    this.filterCakes();



  }

  filterCakes(){
    var text = this.state.filterText;
    var cakes = this.state.cakes;
    var cakesArray = [];

    if(text.length >= 2){
      cakes.forEach(cake => {
        if(cake.title.indexOf(text) !== -1){
          cakesArray.push(cake);
        }
      });

      this.setState({
        cakes:cakesArray
      })

    }else{
      this.getAllCakes();
    }
  }


  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
      <Header />
      <Search filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput}/>
      <CakesList cakes={this.state.cakes} filterText={this.state.filterText}/>
      
      </div>
      );
  }
}

export default App;
