import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import ModalScreen from './screens/ModalScreen';

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }
    }
);


const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

const TabBarNavigator = createBottomTabNavigator(
    {
        Feed: RootStack,
        Details: DetailScreen,
    },
);

export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
}