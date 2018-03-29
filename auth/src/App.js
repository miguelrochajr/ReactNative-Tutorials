import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAHZz9hsb-lSiePBkyM589Qt755IiEWtvY',
      authDomain: 'authentication-b5e97.firebaseapp.com',
      databaseURL: 'https://authentication-b5e97.firebaseio.com',
      projectId: 'authentication-b5e97',
      storageBucket: 'authentication-b5e97.appspot.com',
      messagingSenderId: '53031703058'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
