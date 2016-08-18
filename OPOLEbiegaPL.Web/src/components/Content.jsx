import React from 'react';
import Persons from './Persons'
import Events from './Events'
import Friends from './Friends'
import Contact from './Contact'
import Announcements from './Announcements'

export default React.createClass({
    section: function(){
        switch(this.props.currentView) {
            case 'Persons':
                return <Persons persons={this.props.content.persons} />
            case 'Events':
                return <Events events={this.props.content.events} />
            case 'Friends':
                return <Friends friends={this.props.content.friends} />
            case 'Contact':
                return <Contact contact={this.props.content.contact} />
            case 'Announcements':
                return <Announcements announcements={this.props.content.announcements} />
        }
    },

    render: function() {
        return  <div className="content">
                   { this.section() }
                </div>;
    }   
});