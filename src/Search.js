import React, { Component } from 'react';
import Request from 'superagent';


export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		
	}

	componentWillMount () {

	}

	handleChange (event) {
		var value = event.target.value
		console.log(value);
		//this.setState({y: value})
	}

	render() {



		return (

			<input  placeholder='select' onChange={this.handleChange} />
			)

	}
}


