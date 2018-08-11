import React, { Component} from 'react';
import { View, Text, Button, Image, Platform } from 'react-native';

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

class HomeScreen extends Component {
    static navigationOptions = {
        // title: 'Home',
        headerTitle: <LogoTitle />
    };

    onDetailsPress() {
        this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Details',
        });
    }

    render() {
        return (
            <View style={styles.homeStyle}>
                <Text> Home Screen!</Text>
                <Button 
                    title="Go to Details"
                    onPress={this.onDetailsPress.bind(this)}
                />
            </View>
        );
    }
}

// Styles
const styles = {
    homeStyle: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
};

export default HomeScreen;