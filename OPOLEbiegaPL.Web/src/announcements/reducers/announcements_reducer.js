import * as ActionTypes from '../../shared/constants/action_types';

module.exports = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SET_ANNOUNCEMENTS:
            return action.state;
        default:
            return state;
    }
};