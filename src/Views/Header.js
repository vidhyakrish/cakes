import React, { Component } from 'react';
import logo from '../images/logo.svg';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
			);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Cake Gallery </h2>
			</div>
			);
	}
}



