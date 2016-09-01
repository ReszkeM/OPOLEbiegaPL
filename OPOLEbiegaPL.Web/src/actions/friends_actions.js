import * as ActionTypes from '../constants/action_types';

export function setFriends(state) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            url: 'http://localhost:57174/api/FriendApi/GetAll',
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
            url: 'http://localhost:57174/api/FriendApi/GetById/'+id,
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
            url: 'http://localhost:57174/api/FriendApi/Update',
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
            url: 'http://localhost:57174/api/FriendApi/Delete/'+entry,
            method: 'DELETE',
            type: ActionTypes.SET_FRIENDS
        },
        type: ActionTypes.CLOSE,
        entry
    }
}