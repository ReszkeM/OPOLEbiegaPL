import { bindActionCreators } from 'redux'
import * as actions from '../actions/global_actions';
import * as modalActions from '../actions/modal_actions';

module.exports = {
    textInputChange: function (event) {
        var returnObj;
        var stateObject = function () {
            returnObj = {};
            returnObj[this.target.id] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    },
    enableButton: function() {
        this.setState({
            canSubmit: true
        });
    },
    disableButton: function() {
        this.setState({
            canSubmit: false
        });
    },
    mapStateToProps: function(state) {
        return {
            isPopupVisible: state.modal.isPopupVisible,
            isEditMode: state.modal.isEditMode,
            friends: state.friends,
            events: state.events,
            persons: state.persons,
            announcements: state.announcements
        };
    },
    mapDispatchToProps: function(dispatch) {
        return {
            actions: bindActionCreators(actions, dispatch),
            modalActions: bindActionCreators(modalActions, dispatch)
        }
    }
}