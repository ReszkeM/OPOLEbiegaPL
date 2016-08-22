import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function changeCurrentContent(state, newState) {
    console.log("change content on page");
    console.log(newState);

    return state.merge({
        currentView: newState
    });
}

function sendContactForm(state, newState) {
    console.log("mail send");
    console.log(newState);

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
    }
    return state;
}