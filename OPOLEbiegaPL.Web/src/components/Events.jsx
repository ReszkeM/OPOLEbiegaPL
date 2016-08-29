import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Events = React.createClass({
    getInitialState: function() {
        if (this.props.events.size === 0){
            this.props.setState({}, 'http://localhost:57174/api/EventApi/GetAll', 'events');
        }
        return null;
    },

    getEvents: function() {
        return this.props.events || [];
    },

    getParam: function(entry, paramName) {
        return entry.get(paramName)
    },

    render: function() {
        return  <div className="events">
                    {this.getEvents().map(entry =>
                        <div key={this.getParam(entry, 'Name')}>
                            <h1>{this.getParam(entry, 'Name')}</h1>
                            <p>{this.getParam(entry, 'Place')}</p>
                            <p>{this.getParam(entry, 'Date')}</p>
                            <p>{this.getParam(entry, 'Distance')}</p>
                            <p>{this.getParam(entry, 'Description')}</p>
                        </div>
                    )}
                </div>;
}
});

function mapStateToProps(state, props) {
    return {
        isPopupVisible: state.app.get('isPopupVisible'),
        isEditMode: state.app.get('isEditMode'),
        events: state.app.get('events').valueSeq()
    };
}

export default connect(mapStateToProps, actionCreators)(Events);