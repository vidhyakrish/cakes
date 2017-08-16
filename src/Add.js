import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


import './styles/App.css';
import './styles/layout.css';

class Add extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<h2> Add a cake </h2>
			);
	}
}

export default Add;
