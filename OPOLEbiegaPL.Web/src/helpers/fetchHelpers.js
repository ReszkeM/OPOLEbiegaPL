import {setState} from '../action_creators';
import * as ToastrHelper from './toastrHelper';

function fetchGET (url, callback, jsonCallback) {
    fetch(url, {
        method: 'GET',
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    }).then(callback).then(jsonCallback);
};

function fetchPOST (action, succes, error, successCallback) {
    fetch(action.meta.url, {
        method: action.meta.method,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.entry)
    }).then(succes, error).then(successCallback);
};

function handlePOST(action, store) {
    fetchPOST(action, 
        (result) => {
            ToastrHelper.requestResult(result);
            return result.json();
        },
        (result) => {
            ToastrHelper.requestResult(result);
        },
        (result) => {
            if (action && action.meta && action.meta.propName) {
                store.dispatch({
                    type: "SET_STATE",
                    state: { [action.meta.propName.toLowerCase()]: result }
                });
            }
        }
    );
};

function handleGET(store, url, propName) {
    fetchGET(url, 
        (result) => {
            return result.json();
        },
        (result) => {
            store.dispatch({
                type: 'SET_STATE',
                state: { [propName]: result }
            });
            return result;
        }
    );
};

function getInitialData(action, store) {
//    handleGET(store, 'http://localhost:57174/api/FriendApi/GetAll', 'friends');
    handleGET(store, 'http://localhost:57174/api/EventApi/GetAll', 'events');
    handleGET(store, 'http://localhost:57174/api/PersonApi/GetAll', 'persons');
    handleGET(store, 'http://localhost:57174/api/AnnouncementApi/GetAll', 'announcements');
}

var fetchHelper = {
    getInitialData: getInitialData,
    getData: handleGET,
    sendData: handlePOST
};

module.exports = fetchHelper;