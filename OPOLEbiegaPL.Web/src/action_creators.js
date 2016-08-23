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

export function addFriend(entry) {
    entry = {
        Id: 9,
        Name: 'Friend1234',
        ImageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7k3PGbA8U4kPZJKExIk6JwdFKm2cQk8H33hpYwJWCF0qVOgUoegdpxnc'
    };

    return {
        meta: {
            remote: true,
            url: 'http://localhost:57174/api/FriendApi/Add',
            method: 'POST',
            propName: 'Friends'
        },
        type: 'ADD_NEW_FRIEND',
        entry
    }
}