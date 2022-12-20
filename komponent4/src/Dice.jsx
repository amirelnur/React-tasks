import React, { Component } from "react";

class Dice extends Component {
  handleCLick = (e) => {
    e.target.innerText = Math.floor(Math.random() * 6) + 1;
  };
  render() {
    return (
      <>
        <p className="dice" onClick={this.handleCLick}>
          {this.props.number}
        </p>
      </>
    );
  }
}
export default Dice;
