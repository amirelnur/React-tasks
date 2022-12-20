import React, { Component } from "react";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
class Main extends Component {
  render() {
    return (
      <>
        <PersonalInfo />
        <Experience />
      </>
    );
  }
}
export default Main;
