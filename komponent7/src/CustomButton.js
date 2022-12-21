import React, { Component } from "react";

class CustomButton extends Component {
  state = {
    text: "Button",
    backgroundColor: "",
    isHover: false,
    cursor: ""
  };

  handleClick = () => {
    this.setState({ text: "Clicked", backgroundColor: "red" });
  };

  handleMouseOver = () => {
    this.setState({ isHover: true, cursor: "pointer" });
  };

  handleMouseOut = () => {
    this.setState({ isHover: false, cursor: "" });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <button
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          style={{
            backgroundColor: this.state.backgroundColor,
            cursor: this.state.cursor
          }}
        >
          {this.state.text}
        </button>

        {this.state.isHover && <p>Klik edin!</p>}
      </>
    );
  }
}

export default CustomButton;
