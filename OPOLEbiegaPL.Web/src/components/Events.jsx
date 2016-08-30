import React from 'react';
import {connect} from 'react-redux';
import ComponentHelper from '../helpers/componentHelper'

export const Events = React.createClass({
    config: {
        url: 'http://localhost:57174/api/EventApi',
        type: 'SET_EVENTS',
        object: [],
        title: '',
    },

    getInitialState: function() {
        if (this.props.events.length === 0){
            this.props.actions.setState({}, this.config);
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

export default connect(ComponentHelper.mapStateToProps, ComponentHelper.mapDispatchToProps)(Events);