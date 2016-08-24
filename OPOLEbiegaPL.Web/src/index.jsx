import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
store.dispatch(setState({
    persons: [],
    events: [],
    announcements: [],
    friends: [],
    currentView: "Home",
    isPopupVisible: false
},[
    'Persons',
    'Events',
    'Announcements',
    'Friends'
]));

// render View
ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
    document.getElementById('content')
);
