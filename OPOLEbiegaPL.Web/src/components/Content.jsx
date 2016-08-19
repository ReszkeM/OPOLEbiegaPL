import React from 'react';
import {connect} from 'react-redux';
import Persons from './Persons'
import Events from './Events'
import Friends from './Friends'
import Contact from './Contact'
import Announcements from './Announcements'

export const Content = React.createClass({
    section: function(){
        switch(this.props.currentView) {
            case 'Persons':
                return <Persons persons={this.props.persons} />
            case 'Events':
                return <Events events={this.props.events} />
            case 'Friends':
                return <Friends friends={this.props.friends} />
            case 'Contact':
                return <Contact contact={this.props.contact} />
            case 'Announcements':
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

function mapStateToProps(state, props) {
    return {
        currentView: props.currentView,
        persons: state.get('persons').valueSeq(),
        events: state.get('events').valueSeq(),
        friends: state.get('friends').valueSeq(),
        contact: state.get('contact'),
        announcements: state.get('announcements').valueSeq()
    };
}

export default connect(mapStateToProps)(Content);