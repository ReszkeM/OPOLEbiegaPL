export function setFriends(state) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            url: 'http://localhost:57174/api/FriendApi/GetAll',
            type: 'SET_FRIENDS'
        },
        type: 'GET_NEW_LIST',
        state
    }
}

export function save(entry, config) {
    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/FriendApi/Update',
            method: 'POST',
            type: 'SET_FRIENDS'
        },
        type: 'CLOSE',
        entry
    }
}

export function remove(entry, config) {
    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/FriendApi/Delete/'+entry,
            method: 'DELETE',
            type: 'SET_FRIENDS'
        },
        type: 'CLOSE',
        entry
    }
}