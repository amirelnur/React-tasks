import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="profileHeader">
          <div className="profileImg">
            <img
              src="https://pbs.twimg.com/profile_images/1317829522893475841/Qw5KjrKY_400x400.jpg"
              alt="Profile"
            />
          </div>
          <div className="profileTitle">
            <h3 className="profileName">Elnur Əmirquliyev</h3>
            <p className="position">System Administrator &Front-End Developer</p>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
