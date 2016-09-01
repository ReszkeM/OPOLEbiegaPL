import * as ActionTypes from '../constants/action_types';

module.exports = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SET_EVENTS:
            return action.state;
        default:
            return state;
    }
};