import React, { Component } from "react";
import Screen from "./Screen";
import Button from "./Button";
import "./App.css";

const dupOpRegex = /[+/*]?-?\d+\.?\d*/g;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: "0",
      operatorFlag: false,
      decimalFlag: false,
    };
  }

  handleDigitLimit = () => {
    let currentNumber = this.state.currentNumber;
    let numberLength = currentNumber.length;

    if (numberLength > 13) {
      this.setState({ currentNumber: "Limit" });
      setTimeout(() => {
        this.setState({ currentNumber: "0" });
      }, 2000);
    }
  };

  onClick = (buttonName) => {
    let currentNumber = this.state.currentNumber;
    let operatorFlag = this.state.operatorFlag;

    switch (true) {
      case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
        if (this.state.currentNumber !== "0") {
          currentNumber += buttonName;
          operatorFlag = false;
        } else {
          currentNumber = buttonName;
        }
        break;
      case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
        if (!this.state.operatorFlag) {
          currentNumber += buttonName;
          this.setState({ decimalFlag: false });
        } else {
          const newNumber = currentNumber.slice(0, currentNumber.length - 1);
          currentNumber = newNumber;
          currentNumber += buttonName;
        }
        break;
      case buttonName === "AC":
        currentNumber = "0";
        operatorFlag = false;
        this.setState({ decimalFlag: false });
        break;
      case buttonName === "=":
        console.log(currentNumber.match(dupOpRegex));
        currentNumber = eval(currentNumber.match(dupOpRegex).join(""));
        operatorFlag = false;
        this.setState({ decimalFlag: true });
        break;
      //decimal button
      default:
        if (!this.state.decimalFlag) {
          currentNumber += ".";
          this.setState({ decimalFlag: true });
        }
    }
    this.setState({ operatorFlag });
    this.setState({ currentNumber });

    this.handleDigitLimit();
  };

  render() {
    return (
      <div>
        <div className='calculator'>
          <Screen id='display' currentNumber={this.state.currentNumber} />
          <div className='keypad'>
            <Button onClick={this.onClick} id='clear' name='AC' />
            <Button onClick={this.onClick} id='divide' name='/' />
            <Button onClick={this.onClick} id='multiply' name='*' />
            <Button onClick={this.onClick} id='seven' name='7' />
            <Button onClick={this.onClick} id='eight' name='8' />
            <Button onClick={this.onClick} id='nine' name='9' />
            <Button onClick={this.onClick} id='subtract' name='-' />
            <Button onClick={this.onClick} id='four' name='4' />
            <Button onClick={this.onClick} id='five' name='5' />
            <Button onClick={this.onClick} id='six' name='6' />
            <Button onClick={this.onClick} id='add' name='+' />
            <Button onClick={this.onClick} id='one' name='1' />
            <Button onClick={this.onClick} id='two' name='2' />
            <Button onClick={this.onClick} id='three' name='3' />
            <Button onClick={this.onClick} id='zero' name='0' />
            <Button onClick={this.onClick} id='decimal' name='.' />
            <Button onClick={this.onClick} id='equals' name='=' />
          </div>
        </div>
        <footer>by Carolina</footer>
      </div>
    );
  }
}

export default App;
