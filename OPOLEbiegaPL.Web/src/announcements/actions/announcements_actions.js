import * as ActionTypes from '../../shared/constants/action_types';
import {AnnouncementsURLs} from '../../shared/constants/urls';

export function setAnnouncements(state) {
    return {
        meta: {
            remote: true,
            method: 'GET',
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
            method: 'GET',
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
            method: 'POST',
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
            method: 'DELETE',
            type: ActionTypes.SET_ANNOUNCEMENTS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}