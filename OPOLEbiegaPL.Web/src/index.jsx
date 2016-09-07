// React
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

// My actions
import remoteActionMiddleware from './shared/actions/remote_action_middleware';
import reducer from './shared/reducers/reducer'

// Components
import App from './shared/components/App';
import Menu from './shared/components/Menu';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import Home from './home/components/Home'
import Places from './places/components/Places'
import Persons from './persons/components/Persons'
import Events from './events/components/Events'
import Friends from './friends/components/Friends'
import Contact from './contact/components/Contact'
import Announcements from './announcements/components/Announcements'

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
    <div id="menu">
        <Menu />
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
                    <Route path="places" component={Places} />
                    <Route path="friends" component={Friends} />
                    <Route path="contact" component={Contact} />
                    <Route path="persons" component={Persons} />
                    <Route path="events" component={Events} />
                    <Route path="announcements" component={Announcements} />
                </Route>
              </Router>
            <ReduxToastr timeOut={3000} />
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
