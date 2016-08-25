import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SAVE':
        case 'DELETE':
            // Aktualizujemy stan aplikacji tylko o zamknięcie okna - reszta aktualizuje się sama
            // dzięki propercie 'propName' w 'action_creator'
            // 'fetchHelper' obsługuje aktualizację odpowiedniej property stanu
            return setState(state, { isPopupVisible: false });
    }
    return state;
}
