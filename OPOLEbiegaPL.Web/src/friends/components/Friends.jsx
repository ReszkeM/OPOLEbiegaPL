import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import {setFriend} from '../../shared/helpers/stateHelper'

// components
import {Slider} from '../../shared/components/common/Slider'
import {Friend} from './Friend';

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

    renderFriendsCarousel: function() {
        return  <div id="slider">
                    <Slider collection={this.props.friends} component={Friend} />
                </div>
    },

    render: function() {
        return  <div className="friends">
                    { this.renderFriendsCarousel() }
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