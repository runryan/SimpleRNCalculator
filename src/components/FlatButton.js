
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'iOS Home!',
  android: 'Android Home',
});

type State = {
  operators: Array<string>,
}

export default class DiscoveryScreen extends Component<{}, State> {
  static navigationOptions = {
    "title": '发现',
  };
  state = { operators: ['AC', '÷', '×', '←', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.' ]};

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.operators.map((value, index, array) => (<View ></View>))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    flexWrap: 'wrap',
    
  },

  normalCell: {
    flex: 1,
  },

});
