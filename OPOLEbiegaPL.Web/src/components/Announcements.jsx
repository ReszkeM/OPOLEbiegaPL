import React from 'react';
import {connect} from 'react-redux';
import ComponentHelper from '../helpers/componentHelper'

export const Announcements = React.createClass({
    config: {
        url: 'http://localhost:57174/api/AnnouncementApi',
        type: 'SET_ANNOUNCEMENTS',
        object: [],
        title: '',
    },

    getInitialState: function() {
        if (this.props.announcements.length === 0){
            this.props.actions.setState({}, this.config);
        }
        return null;
    },

    renderListOfItems: function() {
        return this.props.announcements.map( (announcement) =>
            <div key={announcement.Name}>
                <h1>{announcement.Name}</h1>
                <p>{announcement.Place}</p>
                <p>{announcement.Date}</p>
                <p>{announcement.Distance}</p>
                <p>{announcement.Description}</p>
            </div>
        );
    },

    render: function() {
        return  <div className="announcements">
                    { this.renderListOfItems() }
                </div>
    }
});

export default connect(ComponentHelper.mapStateToProps, ComponentHelper.mapDispatchToProps)(Announcements);