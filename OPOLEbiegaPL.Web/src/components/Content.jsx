import React from 'react';
import {connect} from 'react-redux';
import Persons from './Persons'
import Events from './Events'
import Friends from './Friends'
import Contact from './Contact'
import Home from './Home'
import Announcements from './Announcements'
import * as actionCreators from '../action_creators';

export default React.createClass({
    section: function(){
        switch(this.props.currentView) {
            case 'Home':
                return <Home />
            case 'Persons':
                return <Persons persons={this.props.persons} />
            case 'Events':
                return <Events events={this.props.events} />
            case 'Friends':
                return <Friends friends={this.props.friends} />
            case 'Contact':
                return <Contact submit = {this.props.submit} />
            case 'Announcement':
                return <Announcements announcements={this.props.announcements} />
            default:
                return <p>DUPA</p>
        }
    },

    render: function() {
        return  <div className="content">
                   { this.section() }
                </div>;
    }   
});
