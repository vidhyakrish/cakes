import React, { Component } from 'react';
import Request from 'superagent';


export default class CakesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cakes: []
		}

	}

	componentDidMount() {

	}

	componentWillMount () {
		var url = 'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json'
		Request.get(url)
		.accept('json')

		.then(res => {
			console.log(res.body.text);
			this.setState({cakes: res.text});
		})
	}


	render() {
		if (!this.state.cakes.length) return <p>LOADING</p>
			return(
				<div>
				{this.state.cakes.map((cake, i) => <p key={i}>{cake.title}</p>)}	
				</div>
				);
	}


}


