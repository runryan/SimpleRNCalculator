/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { NavigationScreenProp, NavigationState  } from 'react-navigation';
const instructions = Platform.select({
  ios: 'iOS Home!',
  android:
    'Android Home',
});

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

export default class ContactsScreen extends Component<Props> {
  static navigationOptions = {
    "title": '联系人',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>ContactsScreen !</Text>
        <Text style={styles.instructions}>Edit ContactsScreen.js</Text>
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
