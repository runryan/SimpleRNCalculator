/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'iOS Home!',
  android:
    'Android Home',
});

type Props = {};
export default class ChatScreen extends Component<Props> {
  static navigationOptions =  ({navigation}) => {
    return {
      "title": navigation.getParam('toUser', '聊天'),
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ChatScreen!</Text>
        <Text style={styles.instructions}>Edit MeScreen.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Go Back!" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  home: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
