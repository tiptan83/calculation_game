import React from "react";
import CalculationCard from "./CalculationCard";
import { connect } from "react-redux";
import { newNumber, changeResult, resetAnswer } from "./actions";
import { Button } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

class Game extends React.Component {
  componentDidMount() {
    // newNumber(min,max), initialize ranges for calculation
    // action creator has default-range 11-99
    this.props.newNumber(12, 99);
  }

  render() {
    const { number1, number2, res } = this.props;
    return (
      <div style={{ padding: "10px" }}>

        <Header as="h2">Simple math-game (v. travis-test)</Header>

        <CalculationCard
          number1={this.props.number1}
          number2={this.props.number2}
          title="Multiply following numbers"
        />

        <h4>Write result</h4>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.newNumber(12, 99);
            this.props.resetAnswer();
          }}
        >
          <Input
            error={res === number1 * number2}
            value= {this.props.res}
            autoFocus={true}
            onChange={e => {
              this.props.changeResult(e.target.value);
              
            }}
          />
          {res === number1 * number2 && (
            <React.Fragment> &nbsp; Correct!</React.Fragment>
          )}

          <br />
          <br />
          <Button type="submit">Answer</Button>
        </form>
        <br />
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
  { newNumber, changeResult, resetAnswer }
)(Game);
