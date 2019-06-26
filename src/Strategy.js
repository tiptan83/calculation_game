import React, { Fragment } from "react";
import { List } from "semantic-ui-react";
import CalculationCard from "./CalculationCard";

const Strategy = () => {
  return (
    <Fragment>
      <p>
        There is a generic strategy to calculate any two digit numbers in head
        quickly.
      </p>
      <p>Stategy is like an algorhitm with a following example:</p>
      <CalculationCard number1={45} number2={68} title={null} />
      <List as="ol">
        <List.Item as="li">
          Start with first digits from both rows multiply them (4*6)
          <List.List as="ol">
            <List.Item as="li">
              Memorize the result 24 and add a zero to it (240)
            </List.Item>
          </List.List>
        </List.Item>
        <List.Item as="li">
          Multiply first and last digits and products to result
          <List.List as="ol">
            <List.Item as="li">
              Calculate 5*6 and add the result (240 + 30 = 270)
            </List.Item>
            <List.Item as="li">
              Calculate 8*4 and add the result (270 + 32 = 302)
            </List.Item>
          </List.List>
        </List.Item>
        <List.Item as="li">Add a 0 to the result (302 -> 3020)</List.Item>
        <List.Item as="li">
          Calculate last numbers and add result to the existing result (3020 +
          5*8)= 3060
        </List.Item>
        <List.Item as="li">
          You have the correct result -> Repeat with new numbers
        </List.Item>
      </List>
    </Fragment>
  );
};

export default Strategy;
