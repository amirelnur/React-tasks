import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="profileMain">
        <div className="mainTitle">
          <h3>Personal information</h3>
        </div>
        <div className="experienceList">
          <ul>
            <li>
              <b>Ad, soyad:</b> Elnur Əmirquliyev
            </li>
            <li>
              <b>Doğum tarixi və yeri:</b> 15.11.2001/ Quba rayonu Şuduq kəndi
            </li>
            <li>
              <b>Təhsil:</b> Azərbaycan Dövlət Neft və Sənaye Universiteti-
              Kompüter Mühəndisliyi
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
