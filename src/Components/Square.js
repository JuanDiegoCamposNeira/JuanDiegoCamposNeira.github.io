import React from "react";
import "../Stylesheets/square.css";

class Square extends React.Component {
  render() {
    return (
      <div className="square" style={{ backgroundColor: this.props.color }}>
        {this.props.number}
      </div>
    );
  }
}

//------------------  Export the class  ----------------------

export default Square;
