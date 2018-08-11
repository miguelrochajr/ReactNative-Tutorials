import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailScreen,
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