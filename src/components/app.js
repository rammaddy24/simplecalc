import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../theme/styles';
class App extends Component {

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>  
          <Text style={styles.displayText}>{this.props.value}</Text>
        </View>
        <View style={styles.inputContainer}>
            {this.props.inputBtns()}
        </View>
      </View>
    );

  }

}

export default App; 