import {Map} from 'immutable';
import React from 'react';

function setState(state, newState) {
    return state.merge(newState);
}

function changeCurrentContent(state, newState) {
    return state.merge({
        currentView: newState
    });
}

function sendContactForm(state, newState) {
    // TODO informacja o akcji
    console.log("mail send");

    return state;
}

function addNewFriend(state) {
    // TODO informacja o akcji
    console.log(state);

    return state;
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'CHANGE_CONTENT':
            return changeCurrentContent(state, action.entry);
        case 'SUBMIT_CONTACT_FORM':
            return sendContactForm(state, action.entry);
        case 'ADD_NEW_FRIEND':
            return addNewFriend(state);
    }
    return state;
}