import {Map} from 'immutable';

function setState(state, newState) {
    // TODO informacja o akcji
    return state.merge(newState);
}

function sendContactForm(state, newState) {
    // TODO informacja o akcji - nie zmieniamy stanu aplikacji
    console.log("mail send");

    return state;
}

function save(state, newState) {
  // TODO informacja o akcji - stan aplikacji aktualizuje się sam
  // dzięki propercie 'propName' w 'action_creator'
  // 'fetchHelper' obsługuje aktualizację odpowiedniej property stanu
    console.log("client-side action");

    return state.merge({
      isPopupVisible: false
    });
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SUBMIT_CONTACT_FORM':
            return sendContactForm(state, action.entry);
        case 'SAVE':
            return save(state, action);
    }
    return state;
}
