import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Styles from '../helpers/styles'
import Modal from './popups/Modal';
import FriendEdit from './popups/FriendEdit'

export const Friends = React.createClass({
    choosenObject: [],
    title: '',

    getInitialState: function() {
        if (this.props.friends.length === 0){
            this.props.setState({}, 'http://localhost:57174/api/FriendApi/GetAll', 'friends');
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
        this.props.showWindow(isEditMode);
        this.choosenObject = model;
        this.title = text;
    },

    modalRender: function() {
      return this.props.isPopupVisible ?
              <div id="editWindow">
                  <Modal {...this.props} title={this.title} component={FriendEdit} object={this.choosenObject} />
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

function mapStateToProps(state, props) {
    return {
        isPopupVisible: state.app.isPopupVisible,
        isEditMode: state.app.isEditMode,
        friends: state.app.friends
    };
}

export default connect(mapStateToProps, actionCreators)(Friends);