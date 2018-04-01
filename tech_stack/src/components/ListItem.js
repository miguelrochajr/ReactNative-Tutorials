import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        const { library, selectedLibraryId } = this.props;
        console.log(this.props);
        

        if (library.id === selectedLibraryId) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

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
                    {this.renderDescription()}
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

const mapStateToProps = state => {
    /**
     the selectLibraryId comes from the reducer. When we bind the reducer
     SelectionReducer, we are saying that our class now have the state given
     in. In this case, selectedLibraryId. Please refere to file reducers/index.js
     and look for the "selectedLibraryId: SelectionReducer"
     */
    return { selectedLibraryId: state.selectedLibraryId };
};

/* 
    - The first argument is the mapStateToProps function. Sice we do not one,
    we shall pass null.  It is also passed to the Store component

    - The second argument are the actions. Bear in mind that these actions
    will be binded to the ListItem component as props. Thus, we will be able
    to access these actions on our componnet through props.
*/
// export default ListItem;
export default connect(mapStateToProps, actions)(ListItem);