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
        type: 'SUBMIT_CONTACT_FORM',
        entry
    };
}