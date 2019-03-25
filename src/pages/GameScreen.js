
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class GameScreen extends Component<{}> {

  static navigationOptions = {
    "title": '游戏',
    "tabBarVisible": false,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Let's play the game!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: '#53DCA4',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
