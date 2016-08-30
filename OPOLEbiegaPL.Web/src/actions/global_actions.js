export function setState(state, config) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            url: config.url+'/GetAll',
            type: config.type
        },
        type: 'GET_NEW_LIST',
        state
    }
}

export function save(entry, config) {
    return {
        meta: {
            remote: true,
            url: config.url+'/Update',
            method: 'POST',
            type: config.type
        },
        type: 'CLOSE',
        entry
    }
}

export function remove(entry, config) {
    return {
        meta: {
            remote: true,
            url: config.url+'/Delete/'+entry,
            method: 'DELETE',
            type: config.type
        },
        type: 'CLOSE',
        entry
    }
}