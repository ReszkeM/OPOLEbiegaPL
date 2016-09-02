import * as ActionTypes from '../../shared/constants/action_types';
import {personsURLs} from '../../shared/constants/urls';

export function setPersons(state) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            url: personsURLs.getAll,
            type: ActionTypes.SET_PERSONS
        },
        type: ActionTypes.GET_NEW_LIST,
        state
    }
}

export function setPerson(state, id) {
    return {
        meta: {
            remote: state.isEditMode,
            method: 'GET',
            url: personsURLs.getById + id,
            type: ActionTypes.SET_OBJECT
        },
        type: ActionTypes.OPEN,
        state
    }
}

export function save(entry) {
    return {
        meta: {
            remote: true,
            url: personsURLs.update,
            method: 'POST',
            type: ActionTypes.SET_PERSONS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}

export function remove(entry) {
    return {
        meta: {
            remote: true,
            url: personsURLs.remove + entry,
            method: 'DELETE',
            type: ActionTypes.SET_PERSONS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}