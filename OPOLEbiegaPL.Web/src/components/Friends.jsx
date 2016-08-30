import React from 'react';
import {connect} from 'react-redux';
import Styles from '../helpers/styles'
import ComponentHelper from '../helpers/componentHelper'
import Modal from './popups/Modal';
import FriendEdit from './popups/FriendEdit'

export const Friends = React.createClass({
    config: {
        url: 'http://localhost:57174/api/FriendApi',
        type: 'SET_FRIENDS',
        object: [],
        title: ''
    },
    
    getInitialState: function() {
        if (this.props.friends.length === 0){
            this.props.actions.setState({}, this.config);
        }
        return null;
    },

    renderListOfItems: function() {
        return this.props.friends.map( (friend) =>
            <div key={friend.Id}>
                <h1>{friend.Name}</h1>
                <img src={friend.ImageURL} style={Styles.logo} alt="logo" className="img-responsive"/>
                { this.renderEditButton('Edytuj', friend, true) }
            </div>
        );
    },

    renderEditButton: function(text, model, isEditMode) {
      return <div className="form-group">
                <button className="btn btn-success btn-lg" type="submit" onClick={() => this.editButtonClick(text, model, isEditMode)}>{text}</button>
              </div>
    },

    editButtonClick: function(text, model, isEditMode) {
        this.props.modalActions.showWindow(isEditMode);
        this.config.object = model;
        this.config.title = text;
    },

    modalRender: function() {
      return this.props.isPopupVisible ?
              <div id="editWindow">
                  <Modal {...this.props} config={this.config} component={FriendEdit} />
              </div>
              : null
    },

    render: function() {
        return  <div className="friends">
                    { this.renderListOfItems() }
                    <hr />
                    { this.renderEditButton('Dodaj', {}, false) }
                    { this.modalRender() }
                </div>
    }
});

export default connect(ComponentHelper.mapStateToProps, ComponentHelper.mapDispatchToProps)(Friends);