import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // a middleware
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor() {
        super();
        const config = {
            apiKey: 'AIzaSyA0G2Y_g7IhXKC5Hk9j34R1nuUmZ-D7Izg',
            authDomain: 'manager-fc282.firebaseapp.com',
            databaseURL: 'https://manager-fc282.firebaseio.com',
            projectId: 'manager-fc282',
            storageBucket: 'manager-fc282.appspot.com',
            messagingSenderId: '38090154064'
          };        
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(
            reducers, 
            {},  // Any initial state that we might want to pass to our application
            applyMiddleware(ReduxThunk)  // Store enhancer
        );

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
