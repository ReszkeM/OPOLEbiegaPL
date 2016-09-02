import * as ActionTypes from '../../shared/constants/action_types';
import * as requestTypes from '../../shared/constants/request_types';
import {AnnouncementsURLs} from '../../shared/constants/urls';

export function setAnnouncements(state) {
    return {
        meta: {
            remote: true,
            method: requestTypes.GET,
            url: AnnouncementsURLs.getAll,
            type: ActionTypes.SET_ANNOUNCEMENTS
        },
        type: ActionTypes.GET_NEW_LIST,
        state
    }
}

export function setAnnouncement(state, id) {
    return {
        meta: {
            remote: state.isEditMode,
            method: requestTypes.GET,
            url: AnnouncementsURLs.getById + id,
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
            url: AnnouncementsURLs.update,
            method: requestTypes.POST,
            type: ActionTypes.SET_ANNOUNCEMENTS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}

export function remove(entry) {
    return {
        meta: {
            remote: true,
            url: AnnouncementsURLs.remove + entry,
            method: requestTypes.DELETE,
            type: ActionTypes.SET_ANNOUNCEMENTS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}