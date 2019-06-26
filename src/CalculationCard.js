import React, { Component } from "react";
import PropTypes from "prop-types";

class CalculationCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          <li>{this.props.number1}</li>
          <li>{this.props.number2}</li>
        </ul>
      </div>
    );
  }
}
CalculationCard.propTypes = {
  number1: PropTypes.number.isRequired,
  number2: PropTypes.number.isRequired,
}

export default CalculationCard;
