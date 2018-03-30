import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';  // Provider connects redux to react
import { createStore } from 'redux';
import reducers from './reducers';


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  );
};

export default App;
