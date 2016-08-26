export function setState(state, propsToUpdate) {
    return {
        meta: {
            remote: true,
            method: 'GET',
            propsToUpdate: propsToUpdate
        },
        type: 'SET_STATE',
        state
    };
}

export function changeCurrentContent(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function showWindow(isEditMode) {
    var state = {
        isPopupVisible: true,
        isEditMode: isEditMode
    }

    return {
        type: 'SET_STATE',
        state
    }
}

export function hideWindow() {
    var state = { isPopupVisible: false }
    return {
        type: 'SET_STATE',
        state
    }
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

export function save(entry) {
    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/FriendApi/Update',
            method: 'POST',
            propName: 'Friends'
        },
        type: 'SAVE',
        entry
    }
}

export function remove(entry) {
    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/FriendApi/Delete/'+entry,
            method: 'DELETE',
            propName: 'Friends'
        },
        type: 'DELETE',
        entry
    }
}