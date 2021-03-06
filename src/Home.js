import React, { Component } from 'react';
import Header from './Views/Header';
import CakesList from './Views/CakesList';
import Search from './Views/Search';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import './styles/App.css';
import './styles/layout.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { filterText: '', cakes :[]};

		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);

	}

	getAllCakes(){
		var url = 'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json'
		fetch(url)
		.then(res => res.json())
		.then(cakes => this.setState({ cakes }));
	}

	componentWillMount () {
		this.getAllCakes();
	}

	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		});

		this.filterCakes();
	}

	filterCakes(){
		var text = this.state.filterText;
		var cakes = JSON.parse(JSON.stringify(this.state.cakes));
		var cakesArray = [];

		if(text.length >= 2){
			cakes.forEach(cake => {
				if(cake.title.toLowerCase().indexOf(text) !== -1)
					cakesArray.push(cake);
			});

			this.setState({
				cakes:cakesArray
			})

		}else
		this.getAllCakes();

	}


	componentDidMount(){

	}

	render() {
		return (
			<div className="App">
			<Header />
			<Search filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput}/>
			<CakesList cakes={this.state.cakes} filterText={this.state.filterText}/>

			</div>
			);
	}
}

export default Home;


