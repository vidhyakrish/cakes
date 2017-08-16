import React, { Component } from 'react';
import {Button, Col, Form, FormGroup, FormControl, ControlLabel, Navbar, Row} from 'react-bootstrap'
import '../styles/Views/CakesList.css';

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
      <section className="grid">

        {this.props.cakes.map((cake, i) => <div href="#"className="grid__item">
            <h2 className="title title--preview">{cake.title}</h2>

            <span className="category">{cake.desc}</span>
            <div className="meta meta--preview">
              <img alt="author01" src={cake.image} className="meta__avatar" />

            </div>
          </div> )}

</section>

        );
  }
}


