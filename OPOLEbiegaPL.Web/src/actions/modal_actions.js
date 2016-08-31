export function showWindow(state) {
    return {
        type: 'OPEN',
        state
    }
}

export function hideWindow() {
    return {
        type: 'CLOSE'
    }
}

export function setObject(url) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            url: url,
            type: 'SET_OBJECT'
        },
        type: 'GET_OBJECT'
    }
}