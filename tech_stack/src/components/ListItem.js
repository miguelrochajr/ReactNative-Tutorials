import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        
        return(
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}> 
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

/* 
    - The first argument is the mapStateToProps function. Sice we do not one,
    we shall pass null.  It is also passed to the Store component

    - The second argument are the actions. Bear in mind that these actions
    will be binded to the ListItem component as props. Thus, we will be able
    to access these actions on our componnet through props.
*/
// export default ListItem;
export default connect(null, actions)(ListItem);