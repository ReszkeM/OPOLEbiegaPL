import * as ActionTypes from '../../shared/constants/action_types';
import {friendsURLs} from '../../shared/constants/urls';

export function setFriends(state) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            url: friendsURLs.getAll,
            type: ActionTypes.SET_FRIENDS
        },
        type: ActionTypes.GET_NEW_LIST,
        state
    }
}

export function setFriend(state, id) {
    return {
        meta: {
            remote: state.isEditMode,
            method: 'GET',
            url: friendsURLs.getById + id,
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
            url: friendsURLs.update,
            method: 'POST',
            type: ActionTypes.SET_FRIENDS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}

export function remove(entry) {
    return {
        meta: {
            remote: true,
            url: friendsURLs.remove + entry,
            method: 'DELETE',
            type: ActionTypes.SET_FRIENDS
        },
        type: ActionTypes.WAIT_FOR_REQUEST_RESULT,
        entry
    }
}