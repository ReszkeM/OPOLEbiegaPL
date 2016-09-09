import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import ComponentHelper from '../../shared/helpers/componentHelper'

// components
import {Slider} from '../../shared/components/common/Slider'
import {Announcement} from './Announcement';

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

    renderAnnouncementsCarousel: function() {
        return  <div id="slider">
                    <Slider collection={this.props.announcements} component={Announcement} />
                </div>
    },

    render: function() {
        return  <div className="announcements">
                    { this.renderAnnouncementsCarousel() }
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