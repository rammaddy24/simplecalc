import React, { Component } from 'react';
import {
    Text, TouchableHighlight
} from 'react-native';
import styles from '../theme/styles';
import { StyleSheet } from 'react-native';
import { typography, color } from 'react-native-material-design-styles';
const typographyStyle = StyleSheet.create(typography);
const colorStyle = StyleSheet.create(color);

export default class InputButton extends Component {

    render() {
        return (

            <TouchableHighlight style={[styles.inputButton, (this.props.highlight) ? styles.inputButtonHighlighted : null]}
                underlayColor="#193441"
                onPress={this.props.onPress}>
                <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperGrey50]}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }

}