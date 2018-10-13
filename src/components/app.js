import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InputButton from '../components/inputbutton';
import styles from '../theme/styles';
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class App extends Component {
  renderInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton value={input} key={r + "-" + i} />
        );
      }

      views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }
  render() {
    return (
          <View style={styles.rootContainer}>
                <View style={styles.displayContainer}></View>
                <View style={styles.inputContainer}>
                    {this.renderInputButtons()}
                </View>
            </View>
    );

  }

}

export default App;