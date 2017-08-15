import React, { Component } from 'react';
import Request from 'superagent';


export default class CakesList extends React.Component {
	constructor(props) {
		super(props);


	}

	componentDidMount() {

	}

	componentWillMount () {
		


	}


	render() {
		if (!this.props.cakes.length) return <p>LOADING</p>
			return(
				<div>
				{this.props.cakes.map((cake, i) => <p key={i}>{cake.title}</p>)}	
				</div>
				);
	}


}


