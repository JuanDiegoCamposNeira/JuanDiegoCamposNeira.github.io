import React from "react";
import Square from "./Square.js";
import "../Stylesheets/screen.css";

export default class Screen extends React.Component {
  render() {
    let id = 0;
    let sortedNumbers = this.props.numbers;
    sortedNumbers.sort((a, b) => {
      return a.val - b.val;
    });
    return (
      <div className="flex-container">
        <div className="content">
          {sortedNumbers.map((num) => {
            return <Square key={id++} number={num.val} color={num.col} />;
          })}
        </div>
        <div className="content">
          Index :<div className="result">{this.props.result}</div>
        </div>
      </div>
    );
  }
}
