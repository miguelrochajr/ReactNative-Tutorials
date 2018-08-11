import React, { Component} from 'react';
import { View, Text, Button, Image, Platform } from 'react-native';
import LogoTitle from '../components/LogoTitle';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            // title: 'Home',
            headerTitle: <LogoTitle />,
            headerRight: (
                <Button 
                    onPress={navigation.getParam('increaseCount')}
                    title="+1"
                    color="#fff"
                />
            ),
            headerLeft: (
                <Button 
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="white"
                />
            ),
            headerBackTitle: 'Home'
        }
    };

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
      }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
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
                <Text> Home Screen! </Text>
                <Text> Count: {this.state.count}</Text>
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