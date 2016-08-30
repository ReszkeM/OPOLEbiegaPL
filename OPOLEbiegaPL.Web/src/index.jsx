// React
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';


// My actions
import remoteActionMiddleware from './remote_action_middleware';
import reducer from './reducers/reducer'

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


const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

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
                    <Route path="friends" component={Friends} />
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
