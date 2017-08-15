import React, { Component } from 'react';
import Request from 'superagent';


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

			<input  placeholder='search' value={this.props.filterText}  onChange={this.handleFilterTextInputChange}/>
			)

	}
}


