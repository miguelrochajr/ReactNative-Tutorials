// Improt libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // position items on the Y axis
    alignItems: 'center', // position items on the X axis
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2, // explain why later
    position: 'relative' // explain why later
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parths of the app
export default Header;
