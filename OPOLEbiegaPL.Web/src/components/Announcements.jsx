import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Announcements = React.createClass({
    getInitialState: function() {
        if (this.props.announcements.length === 0){
            this.props.setState({}, 'http://localhost:57174/api/AnnouncementApi/GetAll', 'announcements');
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

function mapStateToProps(state, props) {
    return {
        isPopupVisible: state.app.isPopupVisible,
        isEditMode: state.app.isEditMode,
        announcements: state.app.announcements
    };
}

export default connect(mapStateToProps, actionCreators)(Announcements);