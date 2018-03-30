import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  constructor() {
    super();
    const config = {
      apiKey: 'AIzaSyAHZz9hsb-lSiePBkyM589Qt755IiEWtvY',
      authDomain: 'authentication-b5e97.firebaseapp.com',
      databaseURL: 'https://authentication-b5e97.firebaseio.com',
      projectId: 'authentication-b5e97',
      storageBucket: 'authentication-b5e97.appspot.com',
      messagingSenderId: '53031703058'
    };
    firebase.initializeApp(config);
  }

  state = { loggedIn: null };

  // initialize firebase
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    console.log('LOGGED IN STATE: ');
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
