import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import {reducer as toastr} from 'react-redux-toastr'
import ReduxToastr from 'react-redux-toastr'
import app from './reducer';
import {setInitialState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import Persons from './components/Persons'
import Events from './components/Events'
import Friends from './components/Friends'
import Contact from './components/Contact'
import Home from './components/Home'
import Announcements from './components/Announcements'

const reducer = combineReducers({
    app,
    toastr
})

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
store.dispatch(setInitialState({
    persons: [],
    events: [],
    announcements: [],
    friends: [],
    isPopupVisible: false,
    isEditMode: false
}));

// render View
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="home" component={Home}  />
                    <Route path="friends" component={Friends} store={store} />
                    <Route path="contact" component={Contact} />
                    <Route path="persons" component={Persons} />
                    <Route path="events" component={Events} />
                    <Route path="announcement" component={Announcements} />
                </Route>
              </Router>
            <ReduxToastr />
        </div>
    </Provider>,
    document.getElementById('content')
);
