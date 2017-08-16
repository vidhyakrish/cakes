import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/Views/Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  render() {
    return (
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Cake Gallery</h2>
      </div>
      );
  }
}



