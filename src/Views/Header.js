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
			<a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
			<h2><a href="/">Cake Gallery</a></h2>
			</div>
			);
	}
}



