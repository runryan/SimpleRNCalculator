
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const _operatorKeys = ['+', "-", '×', "÷"];
const allKeys = [
  ['AC', '÷', '×', '←'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '='],
  ['0', '0', '.', '=']
];

const Keyboard = (props) => (
  <View style={styles.operatorContainer}>
    {
      allKeys.map((value, index1, array) => (
        <View style={[styles.row]} key={index1}>
          {
            value.map((value, index, array) => (
              <View style={{ flex: 1, justifyContent: 'center' }} key={index}>
                <OperatorButton name={value} as={props.onKeyClicked} />
              </View>))
          }
        </View>))
    }
    <View style={styles.zeroKey}>
      <OperatorButton name="0" as={props.onKeyClicked} />
    </View>

    <View style={styles.equalKey}>
      <OperatorButton name="=" as={props.onKeyClicked} />
    </View>
  </View>
);

const OperatorButton = (props) => (
  <TouchableOpacity activeOpacity={0.5} onPress={(event) => {
    // console.log("点击了" + props.name + '  ')
    props.as({ name: props.name })
  }}>
    <View style={{ height: "100%", justifyContent: 'center', borderWidth: 1, borderColor: '#ffffff', }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

export default class DiscoveryScreen extends Component {

  static navigationOptions = {
    "title": '发现',
  };

  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      operator: '',
      isInputNumber1: true,
      isInputNumber2: false,
      showEqual: false,
      result: '',
    };
  }

  _isValidateNumber = (number) => {
    return !isNaN(parseFloat(number));
  }

  _calculte = (operator, number1, number2) => {
    if(operator == '+') {
      return number1 + number2;
    }
    if(operator == '-') {
      return number1 - number2;
    }
    if(operator == '÷') {
      return number1 / number2;
    }
    if(operator == '×') {
      return number1 * number2;
    }
  }

  _onCellPressed = (props) => {
    console.log("点击了  " + props.name + "  ");

    if (props.name == 'AC') {
      this._reset();
      return;
    }
    if (props.name == '=') {
      let isNum1Validate = this._isValidateNumber(this.state.number1) 
      let isNum2Validate = this._isValidateNumber(this.state.number2) 
      if(isNum1Validate && isNum2Validate) {
        console.log("计算结果")
        this.setState(
          {
            result: this._calculte(this.state.operator, parseFloat(this.state.number1), parseFloat(this.state.number2)),
            showEqual:  true
          }
        )
        return;
      }
      console.log("不满足条件，不计算结果")
      return;
    }
    if (props.name == '←') {
      console.log('删除')
      return;
    }
    var isOperator = _operatorKeys.includes(props.name)
    if(!isOperator) {
      if(this.state.isInputNumber1) {
        if(this.state.number1.length < 4) {
          this.setState({number1: this.state.number1 + props.name})
        }
      } else {
        if(this.state.number2.length < 4) {
          this.setState({number2: this.state.number2 + props.name})
        }
      }
        return;
    }
    var isNumber1Validate = this._isValidateNumber(this.state.number1);
    if (isOperator) {
      if (!isNumber1Validate) {
        console.log("请输入第一个数字")
        return;
      }
      this.state.operator = props.name;
      console.log("输入了运算符： " + isOperator);
      this.setState({ operator: props.name });
      this.state.isInputNumber1 = false;
      this.state.isInputNumber2 = true;
      return;
    }
  };

  _reset = () => {
    this.setState({
      number1: '',
      number2: '',
      operator: '',
      showEqual: false,
      result: '',
      isInputNumber1: true,
      isInputNumber2: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>
            <Text style={{ textAlign: 'right', fontSize: 25, fontWeight: '400' }}>{this.state.number1 + this.state.operator + this.state.number2 + (this.state.showEqual ? " = " : '') + this.state.result}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 15,}}>
            <Text style={{ textAlign: 'right', fontSize: 30, fontWeight: '800' }}>{this.state.isInputNumber1 ? this.state.number1 : this.state.number2}</Text>
          </View>
        </View>
        <Keyboard onKeyClicked={this._onCellPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  display: {
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: '#ffffff',
  },

  operatorContainer: {
    padding: 1,
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#53DCA4',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  zeroKey: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "50%",
    height: "20%",
    backgroundColor: '#53DCA4'
  },

  equalKey: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: "25%",
    height: "40%",
    backgroundColor: '#53DCA4'
  },
});
