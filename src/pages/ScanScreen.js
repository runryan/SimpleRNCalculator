/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const instructions = Platform.select({
  ios: 'iOS Home!',
  android:
    'Android Home',
});

export default class ScanScreen extends Component {
  static navigationOptions =  ({navigation}) => {
    return {title: '扫一扫'}
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={{ height: 80, backgroundColor: 'red', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>ScanScreen!</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.welcome}>Edit MeScreen.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Go Back!" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
// flexDirection: 主轴默认为column
// alignItems: 在主轴上使用，控制子控件摆放在交叉轴上的位置
// justifyContent: 在主轴上使用，控制子控件在主轴上的位置

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 未指定direction,默认为column
    justifyContent: 'center', // 垂直居中
    // alignItems: 'center', // 横向居中
    backgroundColor: '#F5FCFF',
  },
  home: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    backgroundColor: '#00ff00',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    flexGrow: 1,
  },
});
