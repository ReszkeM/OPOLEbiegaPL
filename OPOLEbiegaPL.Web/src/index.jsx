import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);
store.dispatch({ 
    type: 'SET_STATE',
    state: {
        persons: [
            {
                firstName: 'Imie',
                lastName: 'Nazwisko',
                description: '123'
            },
            {
                firstName: 'Imie1',
                lastName: 'Nazwisko1',
                description: 'abc'
            },
        ],
        events: [
            {
                name: 'Event1',
                place: 'Place1',
                date: '21.08.2016 07:00',
                distance: '25km',
                description: '123'
            },
            {
                name: 'Event2',
                place: 'Place2',
                date: '17.09.2016 07:00',
                distance: '53km',
                description: 'abcfgdfgd'
            }
        ],
        announcements: [
            {
                name: 'Announcement1',
                place: 'Place1',
                date: '21.07.2016 07:00',
                distance: '31km',
                description: '123'
            },
            {
                name: 'Announcement2',
                place: 'Place2',
                date: '17.06.2016 07:00',
                distance: '33km',
                description: 'abcfgdfgd'
            }
        ],
        friends: {
            1: {
                name: 'Friend1',
                imageURL: 'http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png'
            },
            2: {
                name: 'Friend2',
                imageURL: 'https://d11xdyzr0div58.cloudfront.net/static/logos/apple-touch-icon-144x144.38cf584757c3.png'
            }
        },
        currentView: "Contact"
    }
});

// render View
ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
    document.getElementById('content')
);
