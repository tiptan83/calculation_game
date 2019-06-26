import React from "react";
import CalculationCard from "./CalculationCard";
import { connect } from "react-redux";
import { newNumber, changeResult } from "./actions";
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

class Question extends React.Component {
  componentDidMount() {
    // newNumber(min,max), initialize ranges for calculation
    // action creator has default-range 11-99
    this.props.newNumber(12,99);
  }

  render() {
    const { number1, number2, res } = this.props;
    return (
      <div style={{padding:'10px'}}>
        <h1>Welcome to simple math-game</h1>
        <CalculationCard
          number1={this.props.number1}
          number2={this.props.number2}
          title="Please multiply following numbers"
        />

        <h3>Give result</h3>
        <form>
          <Input error={res === number1 * number2}
            autoFocus={true}
            onChange={e => {
              this.props.changeResult(e.target.value);
            }}
          />
          {res === number1 * number2 && (
            <React.Fragment> &nbsp; Correct</React.Fragment>
          )}
        </form>

        <br />
        <Button
          onClick={() => {
            this.props.newNumber();
          }}
        >
          New numbers
        </Button>
        <br />

        <br />
        {this.props.testVal1}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number1: state.number1,
  number2: state.number2,
  res: state.result
});

export default connect(
  mapStateToProps,
  { newNumber, changeResult }
)(Question);
