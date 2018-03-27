// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
// Since we are only returning one thing, ES6 allows you to drop the returning
// statement and just place the parenthesis. This means "fat arrow returns
// what's inside of the parenthesis"
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
