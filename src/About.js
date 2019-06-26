import React from "react";
import { Header } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import Strategy from "./Strategy";

const iconStyle = {
  margin: "20px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};

const About = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Icon style={iconStyle} name="calculator" size="huge" />
      <Header as="h1" className="ui center aligned header">
        About the game
        <div className="sub header">
          Simple calculation game by Taneli Tikkakoski
        </div>
      </Header>

      <Header as="h2" dividing>
        Purpose
      </Header>
      <p>This is a very simple demogame written with React and Redux.</p>
      <p>
        State handling is done with redux and outlook is done with semantic ui
        react.{" "}
      </p>
      <Header as="h2" dividing>
        History
      </Header>
      <p>
        First version of the game was written in 2000 to Texas Intruments
        calculator TI-86.
      </p>

      <p>
        Even though the game is really simple, it is still one of my favourite
        games.
      </p>
      <Header as="h2" dividing>
        Strategy
      </Header>
      <Strategy />

      <Header as="h2" dividing>
        Scoring and tips
      </Header>
      <p>When you enter correct answer, a text correct will appear next to the result box.</p>
      <p>There aren't yet any actual scoring in the game.</p>
    </div>
  );
};

export default About;
