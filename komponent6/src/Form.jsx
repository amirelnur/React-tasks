import React from "react";
// import { render } from "react-dom";

export default class Form extends React.Component {
  state = {
    fullname: "",
    email: "",
    number: "",
    comment: "",
    click: false
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  clickHandle = () => {
    this.setState({ click: true });
  };

  submitHandle = (e) => {
    e.preventDefault();
  };
  render() {
    const { fullname, email, number, comment } = this.state;
    const isEnabled =
      fullname.length > 0 &&
      email.length > 0 &&
      number.length > 0 &&
      comment.length > 0;

    if (this.state.click) {
      alert("Göndərildi!");
      setTimeout(() => {
        this.setState({ click: false });
      }, 2000);

      setTimeout(() => {
        this.setState({ fullname: "", email: "", number: "", comment: "" });
      }, 2000);
    }
    return (
      <>
        <form onSubmit={this.submitHandle}>
          <label>Ad, soyad:</label>
          <input
            value={this.state.fullname}
            id="fullname"
            onChange={this.handleChange}
          />

          <label>E-mail: </label>
          <input
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label>Telefon: </label>
          <input
            id="number"
            value={this.state.number}
            onChange={this.handleChange}
          />

          <label>Şərh: </label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          ></textarea>

          <button
            disabled={!isEnabled}
            type="submit"
            onClick={this.clickHandle}
          >
            Göndər
          </button>
        </form>
      </>
    );
  }
}
