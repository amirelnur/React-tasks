import { Component } from "react";
import "./styles.css";
import Dice from "./Dice";
class App extends Component {
  state = {
    symbol: null
  };
  componentDidMount() {
    window.addEventListener("keypress", this.symbolPress);
  }
  symbolPress = (e) => {
    this.setState({ symbol: e.key });
  };
  render() {
    let number1 = 1;
    let number2 = 2;
    if (this.state.symbol === " ") {
      number1 = Math.floor(Math.random() * 6) + 1;
      number2 = Math.floor(Math.random() * 6) + 1;
    }
    return (
      <div className="App">
        <Dice number={number1} />
        <Dice number={number2} />
      </div>
    );
  }
}
export default App;
