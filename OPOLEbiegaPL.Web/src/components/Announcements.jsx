import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Announcements = React.createClass({
    getInitialState: function() {
        if (this.props.announcements.size === 0){
            this.props.setState({}, 'http://localhost:57174/api/AnnouncementApi/GetAll', 'announcements');
        }
        return null;
    },

    getAnnouncements: function() {
        return this.props.announcements || [];
    },
    
    getParam: function(entry, paramName) {
        return entry.get(paramName)
    },

    render: function() {
        return  <div className="announcements">
                    {this.getAnnouncements().map(entry =>
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
        announcements: state.app.get('announcements').valueSeq()
    };
}

export default connect(mapStateToProps, actionCreators)(Announcements);