import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Events = React.createClass({
    getInitialState: function() {
        if (this.props.events.length === 0){
            this.props.setState({}, 'http://localhost:57174/api/EventApi/GetAll', 'events');
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

function mapStateToProps(state, props) {
    return {
        isPopupVisible: state.app.isPopupVisible,
        isEditMode: state.app.isEditMode,
        events: state.app.events
    };
}

export default connect(mapStateToProps, actionCreators)(Events);