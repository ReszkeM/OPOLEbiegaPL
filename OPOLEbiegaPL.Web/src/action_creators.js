export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function changeCurrentContent(entry) {
    return {
        type: 'CHANGE_CONTENT',
        entry
    };
}

export function submit(entry) {
    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/Email/SendEmail',
            method: 'POST'
        },
        type: 'SUBMIT_CONTACT_FORM',
        entry
    };
}