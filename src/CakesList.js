import React, { Component } from 'react';
import {Button, Col, Form, FormGroup, FormControl, ControlLabel, Navbar, Row} from 'react-bootstrap'



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
				<Form>
				<FormGroup>
				<Row>

				{this.props.cakes.map((cake, i) => <Col md={2} key={i}>
					<h3>{cake.title}</h3>
					<p>{cake.desc}</p>
					<img src={cake.image} />
					</Col>)}	

				
				</Row>

				</FormGroup> </Form>
				
				);
	}


}


