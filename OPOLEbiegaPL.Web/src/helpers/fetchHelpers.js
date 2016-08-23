import {setState} from '../action_creators';

var fetchGET = function (url, callback) {
    fetch(url, {
        method: 'GET',
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    }).then((response) => {
        return response.json();
    }).then(result => callback(result));
};

var fetchPOST = function(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((result) => callback(result));
};

function handlePOST(action, store) {
    fetchPOST(action.meta.url, action.entry, function (result) {
        console.log(result);
        if (result.ok) {
            switch (action.meta.propName) {
                case 'Friends':
                    store.dispatch(setState(store, ['Friends']));
                case 'Events':
                    store.dispatch(setState(store, ['Events']));
                case 'Persons':
                    store.dispatch(setState(store, ['Persons']));
                case 'Announcements':
                    store.dispatch(setState(store, ['Announcements']));
            }
        }
    });
};

function handleGET(url, store, propName) {
    fetchGET(url, function (result) {
        store.dispatch({
            type: 'SET_STATE',
            state: { [propName]: result }
        });

        return result;
    });
};

function getData(action, store) {
    if (action.meta.propsToUpdate.indexOf('Friends') !== -1) {
        handleGET('http://localhost:57174/api/FriendApi/GetAll', store, 'friends');
    }
    if (action.meta.propsToUpdate.indexOf('Events') !== -1) {
        handleGET('http://localhost:57174/api/EventApi/GetAll', store, 'events');
    }
    if (action.meta.propsToUpdate.indexOf('Persons') !== -1) {
        handleGET('http://localhost:57174/api/PersonApi/GetAll', store, 'persons');
    }
    if (action.meta.propsToUpdate.indexOf('Announcements') !== -1) {
        handleGET('http://localhost:57174/api/AnnouncementApi/GetAll', store, 'announcements');
    }
}

var fetchHelper = {
    getData: getData,
    sendData: handlePOST
};

module.exports = fetchHelper;