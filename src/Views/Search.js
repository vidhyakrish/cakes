import React, { Component } from 'react';

import '../styles/Views/Search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  componentDidMount() {

  }

  componentWillMount () {

  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <div>
      <h3><a href='/add'>Add a cake </a></h3>
      <input  placeholder='Search..' className="search-input" value={this.props.filterText}  onChange={this.handleFilterTextInputChange}/>
      </div>
      )

  }
}


