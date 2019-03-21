/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';

const instructions = Platform.select({
    ios: 'iOS Home!',
    android: 'Android Home',
});

export default class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "微信",
            headerRight: <Button title="扫一扫" color="#fff" fontSize='12' onPress={navigation.getParam('scan')} />,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'AFNetworking', latestMessage: '吃了吗？', date: '上午 12：00', key: "0" },
                { name: 'Moya', latestMessage: '我们在哪里见面？', date: '昨天', key: "1" },
                { name: 'Retrofit', latestMessage: '恭喜您呀！', date: '2019/3/13', key: "2" },
            ],
            isRefreshing: false,
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ scan: this._scan });
    }

    // 扫一扫
    _scan = () => {
        this.props.navigation.navigate("Scan");
    }

    // 创建单元格
    _generateItem = ({ item }) => (
        <View style={[styles.cell]}>
            <View style={{ width: 48, height: 48, backgroundColor: '#FF0000', margin: 16 }} />
            <View style={{ flex: 1, margin: 10, marginLeft: 0 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, color: '#333333', fontWeight: 'bold', flex: 1 }} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: '#999999' }}>{item.date}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 14, color: '#999999' }}>{item.latestMessage}</Text>
                </View>
            </View>
        </View>
    );

    // 刷新事件监听
    _onRefresh2 = () => {
        console.log("哈哈哈");
        this.setState({ isRefreshing: true });
        setTimeout(() => {
            console.log("三秒后停止刷新");
            this.setState({ isRefreshing: false });
        }, 1500);
    }

    // 跳转到聊天页面
    _showChatScreen(user) {
        this.props.navigation.navigate("Chat", user);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.messageList}
                    data={this.state.messages}
                    renderItem={this._generateItem}
                    onRefresh={this._onRefresh2}
                    refreshing={this.state.isRefreshing}
                />
                <Button title="Show ChatScreen!" onPress={this._showChatScreen.bind(this, { toUser: '张三' })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    messageList: {
        width: '100%',
        flex: 1,
        backgroundColor: '#FEFEFE',
    },
    home: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#33ffff',
        marginBottom: 5,
        backgroundColor: '#ffff00'
    },
    cell: {
        backgroundColor: '#fff0f0',
        flexDirection: 'row',
        alignItems: 'center',
    }
});
