import React, { Component } from "react";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";

class Profile extends Component {
  render() {
    return (
      <>
        <Name />
        <Email />
        <Address />
        <PersonalInfo />
      </>
    );
  }
}
export default Profile;
