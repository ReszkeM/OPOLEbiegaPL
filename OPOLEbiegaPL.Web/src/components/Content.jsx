import React from 'react';
import Persons from './Persons'
import Events from './Events'
import Friends from './Friends'
import Contact from './Contact'
import Home from './Home'
import Announcements from './Announcements'
import FriendEdit from './popups/FriendEdit'

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
                return <Friends title="Dodaj" component={FriendEdit} {...this.props} />
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
