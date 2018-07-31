import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Animated
} from 'react-native';

async function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}

export default class ClickListenScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedColor = new Animated.Value(0);
    this.animatedText = new Animated.Value(0);
    this.state = {

    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }

  makeBlack() {
      this.animatedColor.setValue(0);
      Animated.parallel([
        Animated.timing(
          this.animatedColor,
          {
            toValue: 1,
            duration: 1000
          }
        ),
        Animated.timing(
          this.animatedText,
          {
            toValue: 1,
            duration: 1000
          }
        ),
      ]).start();
  }

  render() {
    // console.log('click detected in modal: ', this.props.navigation.getParam('clickDetected');
    let backgroundColor = this.animatedColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(223, 223, 223, 1.0)', 'rgba(0, 0, 0, 1.0)']
    });
    let textColor = this.animatedText.interpolate({
      inputRange: [0, 1],
      outputRange: ['#000000', '#ffffff']
    });


    return (
      <Animated.View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <Animated.Text style={[styles.text, {color: textColor}]}>{`YOU ARE CLAIMING\n THE WORLD OF ${this.props.navigation.getParam('realm').name}`}</Animated.Text>
        <Animated.Text style={[styles.text, {color: textColor}]}>{`TAP YOUR RUNE AND THE WORLD WILL\n TURN BLACK WHEN READY.`}</Animated.Text>
        <TouchableHighlight
          onPress={() => {
            this.props.hide()
          }}>
          <Animated.Text style={{color: textColor}}>back</Animated.Text>
        </TouchableHighlight>
        {/* <TouchableHighlight
          onPress={() => {
            this.makeBlack()
          }}>
          <Text>make black</Text>
        </TouchableHighlight> */}
      </Animated.View>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: '#DFDFDF',

  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
});