import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import Styles from '../../shared/constants/styles'
import {friend} from '../../shared/constants/initialStates'
import {setFriend} from '../../shared/helpers/stateHelper'
import ComponentHelper from '../../shared/helpers/componentHelper'

// components
import EditModal from '../../modal/components/EditModal';
import FriendEdit from './FriendEdit'

// actions
import * as friendsActions from '../actions/friends_actions';
import * as modalActions from '../../modal/actions/modal_actions';

export const Friends = React.createClass({  
    getInitialState: function() {
        if (this.props.friends.length === 0){
            this.props.actions.setFriends({});
        }
        return null;
    },

    renderListOfItems: function() {
        return this.props.friends.map( (friend) =>
            <div key={friend.Id}>
                <h1>{friend.Name}</h1>
                <img src={friend.ImageURL} style={Styles.logo} alt="logo" className="img-responsive"/>
                { this.renderEditButton(friend.Id) }
            </div>
        );
    },

    renderEditButton: function(id = -1) {
        var text = id > 0 ? 'Edytuj' : 'Dodaj';
        return  <div className="form-group">
                    <button className="btn btn-success btn-lg" type="submit" onClick={() => this.editButtonClick(text, id)}>{text}</button>
                </div>
    },

    editButtonClick: function(title, id) {
        this.props.actions.setFriend({
            isPopupVisible: true,
            isEditMode: id > 0,
            title: title
        }, id);
    },

    modalRender: function() {
      return this.props.modal.isPopupVisible ?
              <div id="editWindow">
                  <EditModal {...this.props.modal} state={friend} setObject={setFriend} {...this.props.actions} {...this.props.modalActions} component={FriendEdit} />
              </div>
              : null
    },

    render: function() {
        return  <div className="friends">
                    { this.renderListOfItems() }
                    <hr />
                    { this.renderEditButton() }
                    { this.modalRender() }
                </div>
    }
});

function mapStateToProps(state) {
    return {
        modal: state.modal,
        friends: state.friends,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(friendsActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);