import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import {reducer as toastr} from 'react-redux-toastr'
import ReduxToastr from 'react-redux-toastr'
import app from './reducer';
import App from './components/App';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';

const reducer = combineReducers({
    app,
    toastr
})

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
store.dispatch(setState({
    persons: [],
    events: [],
    announcements: [],
    friends: [],
    currentView: "Home",
    isPopupVisible: false,
    isEditMode: false
},[
    'Persons',
    'Events',
    'Announcements',
    'Friends'
]));

// render View
ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <ReduxToastr />
        </div>
    </Provider>,
    document.getElementById('content')
);
