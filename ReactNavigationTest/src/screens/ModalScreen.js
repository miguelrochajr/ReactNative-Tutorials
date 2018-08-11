import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ModalScreen extends Component {
    render() {
        return (
            <View style={styles.modalScreenStyle}>
                <Text style={styles.modalTextStyle}>This is a modal!</Text>
                <Button 
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismss"
                />
            </View>
        );
    } 
}

const styles = {
    modalScreenStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalTextStyle: {
        fontSize: 30
    }
};

export default ModalScreen;