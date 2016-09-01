﻿import * as ActionTypes from '../constants/action_types';

function setState(state, newState) {
    return Object.assign({}, state, newState);
}

var initialState = {
    isPopupVisible: false, 
    isEditMode: false,
    url: null,
    title: null
}

module.exports = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CLOSE:
            return setState(state, initialState);
        case ActionTypes.OPEN:
            return setState(state, action.state);
        case ActionTypes.SET_OBJECT:
            return setState(state, action.state);  
        default:
            return state;
    }
};