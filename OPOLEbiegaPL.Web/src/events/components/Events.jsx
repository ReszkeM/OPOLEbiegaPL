import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import ComponentHelper from '../../shared/helpers/componentHelper'

// actions
import * as eventsActions from '../actions/events_actions';
import * as modalActions from '../../modal/actions/modal_actions';

export const Events = React.createClass({
    getInitialState: function() {
        if (this.props.events.length === 0){
            this.props.actions.setEvents({});
        }
        return null;
    },

    renderListOfItems: function() {
        return this.props.events.map( (event) =>
            <div key={event.Name}>
                <h1>{event.Name}</h1>
                <p>{event.Place}</p>
                <p>{event.Date}</p>
                <p>{event.Distance}</p>
                <p>{event.Description}</p>
            </div>
        );
    },

    render: function() {
        return  <div className="events">
                    { this.renderListOfItems() }
                </div>
    }
});


function mapStateToProps(state) {
    return {
        modal: state.modal,
        events: state.events,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventsActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);