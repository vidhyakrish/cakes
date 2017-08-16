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
       <input  placeholder='search' className="search-input" value={this.props.filterText}  onChange={this.handleFilterTextInputChange}/>
      )

  }
}


