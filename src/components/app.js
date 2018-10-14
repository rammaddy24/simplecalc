import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../theme/styles';
class App extends Component {

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>  
   <Text style={styles.displayText}>{this.props.prevalue!=0 ?this.props.prevalue : '' }
    {(this.props.symbol !=null)? this.props.symbol :""} 
    {(this.props.prevalue !=0 && this.props.symbol !=null 
    && this.props.value ==0)?'' :this.props.value}  </Text> 
     {/*<Text style={styles.displayText}>{this.props.value}</Text>*/}
        </View>
        <View style={styles.inputContainer}>
            {this.props.inputBtns()}
        </View>
      </View>
    );

  }

}

export default App; 