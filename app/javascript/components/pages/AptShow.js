import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button, NavLink } from "reactstrap";

class AptShow extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return(
        <Col sm="6">
        <Card body>
          <CardTitle>This Apartment {this.props.apt.street}!</CardTitle>
          
          <CardText>I am located in {this.props.apt.city},  {this.props.apt.state}.</CardText>
        </Card>
      </Col>
    )
  }
}

export default AptShow