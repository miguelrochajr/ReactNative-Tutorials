import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount(){
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2
     });

     // this is the datasource for our ListView
     this.DataSource = ds.cloneWithRows(this.props.libraries);

  }

  // returns a single library
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView 
        dataSource={this.DataSource} // CAREFUL: use DataSource, with CAPITAL D
        renderRow={this.renderRow} // tell the ListView how to render each row
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
