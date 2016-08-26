import {Map} from 'immutable';
import * as ToastrHelper from './helpers/toastrHelper';

function setState(state, newState) {
    return state.merge(newState);
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
        case 'SET_INITIAL_STATE':
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