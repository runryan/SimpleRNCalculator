/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, Icon} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from './src/pages/HomeScreen';
import ContactsScreen from './src/pages/ContactsScreen';
import DiscoveryScreen from './src/pages/DiscoveryScreen';
import MeScreen from './src/pages/MeScreen';
import ChatScreen from './src/pages/ChatScreen';
import ScanScreen from './src/pages/ScanScreen';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>I need tabbar!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const HomeNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Chat: ChatScreen,
        Scan: ScanScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FF0000',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle: null,
        }
    }
);

const ContactsNavigator = createStackNavigator(
    {
        Contacts: ContactsScreen
    },
    {
        initialRouteName: "Contacts",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FF0000',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const DiscoveryNavigator = createStackNavigator(
    {
        Discovery: DiscoveryScreen
    },
    {
        initialRouteName: "Discovery",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FF0000',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const MeNavigator = createStackNavigator(
    {
        Me: MeScreen
    },
    {
        initialRouteName: "Me",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FF0000',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: () => ({
                tabBarLabel: "微信",
                tabBarIcon: ({focused, horizontal, tintColor}) => <Image source={focused ? require('./resource/imgs/wechat_selected.png') : require('./resource/imgs/wechat_normal.png')} style={styles.tabBarIcon} />,
              }),
        },
        Contacts: {
            screen: ContactsNavigator,
            navigationOptions: {
                tabBarLabel: '联系人',
                tabBarIcon: ({focused, horizontal, tintColor}) => <Image source={focused ? require('./resource/imgs/contact_selected.png') : require('./resource/imgs/contact_normal.png')} style={styles.tabBarIcon} />,
            },
        },
        Discovery: {
            screen: DiscoveryNavigator,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({focused, horizontal, tintColor}) => <Image source={focused ? require('./resource/imgs/discovery_selected.png') : require('./resource/imgs/discovery_normal.png')} style={styles.tabBarIcon} />,
            }
        },
        Me: {
            screen: MeNavigator,
            navigationOptions: {
                tabBarLabel: '我',
                tabBarIcon: ({focused, horizontal, tintColor}) => <Image source={focused ? require('./resource/imgs/me_selected.png') : require('./resource/imgs/me_normal.png')} style={styles.tabBarIcon} />,
            }
        },
    }, {
        tabBarOptions: {
            activeTintColor: '#1FB922',
            // showIcon: true,
        },
    }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tabBarIcon: {
        width: 24,
        height: 24,
    }
});
