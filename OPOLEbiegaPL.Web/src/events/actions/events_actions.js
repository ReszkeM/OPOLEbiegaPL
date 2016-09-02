import * as ActionTypes from '../../shared/constants/action_types';
import * as requestTypes from '../../shared/constants/request_types';
import {eventsURLs} from '../../shared/constants/urls';

export function setEvents(state) {
    return {
        meta: {
            remote: true,
            method: requestTypes.GET,
            url: eventsURLs.getAll,
            type: ActionTypes.SET_EVENTS
        },
        type: ActionTypes.GET_NEW_LIST,
        state
    }
}

export function setEvent(state, id) {
    return {
        meta: {
            remote: state.isEditMode,
            method: requestTypes.GET,
            url: eventsURLs.getById + id,
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
            url: eventsURLs.update,
            method: requestTypes.POST,
            type: ActionTypes.SET_EVENTS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}

export function remove(entry) {
    return {
        meta: {
            remote: true,
            url: eventsURLs.remove + entry,
            method: requestTypes.DELETE,
            type: ActionTypes.SET_EVENTS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}