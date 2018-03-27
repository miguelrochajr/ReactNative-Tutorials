import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Class based components
//  We use class based components when we need a more complex component that
// more helper methods
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

export default AlbumList;
