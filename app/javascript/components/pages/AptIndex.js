import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col } from "reactstrap";

class AptIndex extends Component {
  render() {
    return (
      <>
        <h1>Check out our Apartments! 🏚</h1>
        <h3>Current listings in your area</h3>
        <br />
        <Col sm="6">
            {this.props.apts.map(apt => {
                return(
      <             Card body key={apt.user_id}>
                        <h3>🛖</h3>
                    <NavLink to={`/aptshow/${apt.user_id}`}>
                        <CardTitle>
                                <h4>{apt.street}</h4>
                        </CardTitle>
                    </NavLink>
                    </Card>
                )
            })}
        </Col>
     </>
    );
  }
}
export default AptIndex;