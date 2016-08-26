import {setState} from '../action_creators';
import * as ToastrHelper from './toastrHelper';

var fetchGET = function (url, callback) {
    fetch(url, {
        method: 'GET',
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    }).then((response) => {
        return response.json();
    }).then(result => callback(result));
};

var fetchPOST = function(action, success, error) {
    fetch(action.meta.url, {
        method: action.meta.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.entry)
    }).then(success, error);
};

function handlePOST(action, store) {
    fetchPOST(action, 
        (success) => {
            store.dispatch(setState(store, [action.meta.propName]));
            ToastrHelper.requestResult(success);
        },
        (error) => {
            ToastrHelper.requestResult(error);
        }
    );
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