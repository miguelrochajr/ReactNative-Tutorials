import React, { Component} from 'react';
import { Image, Platform } from 'react-native';

class LogoTitle extends Component {
    render() {
        return (
          <Image
            source={require('../images/spiro.png')}
            style={{ width: 30, height: 30, marginLeft: Platform.OS === 'ios' ? 0: 10 }}
          />
        );
    }
}

export default LogoTitle;