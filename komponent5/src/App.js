import "./styles.css";
import React from "react";
export default class App extends React.Component {
  state = {
    name: "",
    ident: "",
    gender: "Kişi",
    age: "",
    mail: "",
    phone: "",
    symptom: "",
    reseption: ""
  };
  handleSumbit = (e) => {
    e.preventDefault();
    alert("Kart qeydiyyatdan keçdi");
    console.log("Xestenin tam adı: " + this.state.name);
    console.log("Şəxsiyyət vəsiqəsinin seriya ve nömrəsi: " + this.state.ident);
    console.log("Cinsiyyət: " + this.state.gender);
    console.log("Yaş: " + this.state.age);
    console.log("Email : " + this.state.mail);
    console.log("Telefon : " + this.state.phone);
    console.log("Simptomlar: " + this.state.symptom);
    console.log("Təkrar qəbul: " + this.state.reseption);
  };
  handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    if (key === "name") this.setState({ name: value });
    if (key === "id") this.setState({ ident: value });
    if (key === "gender") this.setState({ gender: value });
    if (key === "age") this.setState({ age: value });
    if (key === "mail") this.setState({ mail: value });
    if (key === "phone") this.setState({ phone: value });
    if (key === "symptom") this.setState({ symptom: value });
    if (key === "reseption") this.setState({ reseption: value });
    if (this.state.name !== "" && this.state.id !== "")
      this.setState({ isActive: true });
  };
  render() {
    return (
      <div className="container">
        <h1>Pasiyentin qeydiyyat anketi</h1>
        <div>
          <form onSubmit={this.handleSumbit}>
            <label htmlFor="name">
              Xəstənin tam adı(A.S.A):
              <input
                className="patientName"
                type="text"
                name="name"
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="pSerial">
              Şəxsiyyət vəsiqəsinin seriya və nömrəsi:
              <input
                className="patientPassId"
                type="text"
                name="pSerial"
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="pgender">
              Cinsiyyət:
              <select name="gender" id="gender" onChange={this.handleChange}>
                <option value="Kişi">Kişi</option>
                <option value="Qadın">Qadın</option>
              </select>
            </label>
            <label htmlFor="age">
              Yaş:
              <input
                className="age"
                type="number"
                name="age"
                min="0"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="pEmail">
              E-mail:
              <input
                className="email"
                type="email"
                name="mail"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="tel">
              Telefon :
              <input
                className="tel"
                type="number"
                name="tel"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="pSymptom">
              Simptomları qeyd edin:
              <textarea
                name="pSymptom"
                id="symptom"
                cols="30"
                rows="10"
                onChange={this.handleChange}
              ></textarea>
            </label>
            <label htmlFor="pResReseption" className="checkbox">
              Təkrar qəbul:
              <input
                className="resReseption"
                type="checkbox"
                name="pResReseption"
                onChange={this.handleChange}
              />
            </label>
            <button className="submit">Göndər</button>
          </form>
        </div>
      </div>
    );
  }
}
