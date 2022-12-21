import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [state, setState] = useState({
    employees: [],
    inputValue: ""
  });
  const handleChange = (e) => {
    setState({ ...state, inputValue: e.target.value });
  };
  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setState({ employees: data });
      });
  }, []);
  return (
    <div className="App">
      <div>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={handleChange}
        />
        <caption><b>DATABASE ;) </b></caption>
      </div>
      <div>
        {state.employees
          .filter((item) => {
            if (state.inputValue?.length > 0) {
              return item.name
                .toLowerCase()
                .includes(state.inputValue?.toLowerCase());
            } else {
              return item;
            }
          })
          .map((emp) => {
            return (
              <div className="view" key={emp.name}>
               
                <table>
              
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Role</th>
                  </tr>
                  <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>{emp.role}</td>
                  </tr>
                </table>
              </div>
            );
          })}
      </div>
    </div>
  );
}
