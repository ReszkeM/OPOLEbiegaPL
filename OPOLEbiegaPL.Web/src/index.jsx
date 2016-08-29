// React
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { reducer as toastr } from 'react-redux-toastr'

// My actions
import app from './reducer';
import {setInitialState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';

// Components
import App from './components/App';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Persons from './components/Persons'
import Events from './components/Events'
import Friends from './components/Friends'
import Contact from './components/Contact'
import Home from './components/Home'
import Announcements from './components/Announcements'

const reducer = combineReducers({
    app,
    toastr
});
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

ReactDOM.render(
    <div id="menu">
        <Menu menuItems={['Persons', 'Friends' , 'Events' , 'Announcement' , 'Contact' ]} />
    </div>,
     document.getElementById('menu')
);

ReactDOM.render(
    <div id="header">
        <Header />
    </div>,
    document.getElementById('header')
);

// render View
ReactDOM.render(
    <Provider store={store}>
        <div id="content">
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

ReactDOM.render(
    <div id="footer">
        <Footer />
    </div>,
    document.getElementById('footer')
);
