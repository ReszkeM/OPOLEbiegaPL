import * as ActionTypes from '../constants/action_types';
import {friendsURLS} from '../constants/urls';

export function setFriends(state) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            url: friendsURLS.getAll,
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
            url: friendsURLS.getById + id,
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
            url: friendsURLS.update,
            method: 'POST',
            type: ActionTypes.SET_FRIENDS
        },
        type: ActionTypes.CLOSE,
        entry
    }
}

export function remove(entry) {
    return {
        meta: {
            remote: true,
            url: friendsURLS.remove + entry,
            method: 'DELETE',
            type: ActionTypes.SET_FRIENDS
        },
        type: ActionTypes.CLOSE,
        entry
    }
}