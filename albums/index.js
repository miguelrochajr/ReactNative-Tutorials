// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// Since we are only returning one thing, ES6 allows you to drop the returning
// statement and just place the parenthesis. This means "fat arrow returns
// what's inside of the parenthesis"
const App = () => (
  // See S8L48. The teacher said it was needed but mine worked fine without it
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
