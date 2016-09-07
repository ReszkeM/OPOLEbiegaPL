import * as ActionTypes from '../../shared/constants/action_types';
import * as requestTypes from '../../shared/constants/request_types';
import {placesURLs} from '../../shared/constants/urls';

export function setPlaces(state) {
    return {
        meta: {
            remote: true,
            method: requestTypes.GET,
            url: placesURLs.getLatest,
            type: ActionTypes.SET_PLACES
        },
        type: ActionTypes.GET_NEW_LIST,
        state
    }
}

export function expand(state) {
    return {
        meta: {
            remote: true,
            method: requestTypes.GET,
            url: placesURLs.getAll,
            type: ActionTypes.SET_PLACES
        },
        type: ActionTypes.GET_NEW_LIST,
        state
    }
}

export function collapse(state) {
    return {
        type: ActionTypes.SET_PLACES,
        state
    }
}

export function setPlace(state, id) {
    return {
        meta: {
            remote: state.isEditMode,
            method: requestTypes.GET,
            url: placesURLs.getById + id,
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
            url: placesURLs.update,
            method: requestTypes.POST,
            type: ActionTypes.SET_PLACES
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}

export function remove(entry) {
    return {
        meta: {
            remote: true,
            url: placesURLs.remove + entry,
            method: requestTypes.DELETE,
            type: ActionTypes.SET_PLACES
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}