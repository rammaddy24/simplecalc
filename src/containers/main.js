import React, { Component } from 'react';
import App from '../components/app';
import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from '../theme/styles';
import { setinput, calculateinput, result } from '../actions/calculator';
import InputButton from '../components/inputbutton';


const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, 'ce', '=', '+']
];
class Main extends Component {
  constructor(props) {
    super(props);

  }

  renderInputButtons() {
    let views = inputButtons.map((row, idx) => {
      let inputRow = row.map((buttonVal, columnIdx) => {
        return <InputButton
          value={buttonVal}
          highlight={this.props.selectedSymbol === buttonVal}
          onPress={this.onInputButtonPressed.bind(this, buttonVal)}
          key={'butt-' + columnIdx} />;
      });
      //       console.log("##inputRow",inputRow);
      return <View style={styles.inputRow} key={'row-' + idx}>{inputRow}</View>;
    });

    return views;
  }

  onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number': {
        console.log("##input_val", input);
        return this.handleNumberInput(input);
      }

      default:
        return this.handleStringInput(input);
    }
  }

  handleNumberInput(num) {
    let inputValue = (this.props.inputValue * 10) + num;
    var data = { inputValue: inputValue };
    this.props.setinput(data);
  }

  handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-': {
        console.log("##redux_input", this.props.inputValue);
        var data = { inputValue: 0, selectedSymbol: str, previousInputValue: this.props.inputValue };
        this.props.calculateinput(data);
        break;
      }
      case '=':
        let symbol = this.props.selectedSymbol,
          inputValue = this.props.inputValue,
          previousInputValue = this.props.previousInputValue;

        if (!symbol) {
          return;
        }
        var inputobj = { a: previousInputValue, b: inputValue };
        var data = {
          previousInputValue: 0,
          //inputValue: eval(previousInputValue + symbol + inputValue),
          inputValue: (symbol == '+') ? (inputobj.a + inputobj.b) :
            ((symbol == '-') ? (inputobj.a - inputobj.b) :
              ((symbol == '*') ? (inputobj.a * inputobj.b) :
                (inputobj.a / inputobj.b))),
          selectedSymbol: null
        };
        this.props.result(data);
        break;

      case 'ce':
        var data = {
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null
        };
        this.props.calculateinput(data);
        break;

      /*  case 'c':
          this.setState({ inputValue: 0 });
          break;
        */

    }
  }

  render() {
    return (
      <App
        inputBtns={this.renderInputButtons.bind(this)}
        value={this.props.inputValue}
        prevalue={this.props.previousInputValue}
        symbol={this.props.selectedSymbol}

      />
    );

  }

}

const mapStateToProps = (state) => {
  return {
    previousInputValue: state.calculate.previousInputValue,
    inputValue: state.calculate.inputValue,
    selectedSymbol: state.calculate.selectedSymbol,
  };
}

const mapDispatchToProps = { setinput, calculateinput, result };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
//export default Main;