import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import ComponentHelper from '../../shared/helpers/componentHelper'

// actions
import * as announcementsActions from '../actions/announcements_actions';
import * as modalActions from '../../modal/actions/modal_actions';

export const Announcements = React.createClass({
    getInitialState: function() {
        if (this.props.announcements.length === 0){
            this.props.actions.setAnnouncements({});
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

function mapStateToProps(state) {
    return {
        modal: state.modal,
        announcements: state.announcements,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(announcementsActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);