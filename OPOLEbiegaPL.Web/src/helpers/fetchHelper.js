import {setState} from '../actions/global_actions';
import * as ToastrHelper from './toastrHelper';
import * as ActionTypes from '../constants/action_types';

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
            // TODO message
            ToastrHelper.requestResult(result);
        },
        (result) => {
            console.log(store.getState())
            if (action && action.meta && action.meta.type) {
                store.dispatch({
                    type: action.meta.type,
                    state: result
                });
                store.dispatch({
                    type: ActionTypes.CLOSE
                });
            }
        }
    );
};

function handleGET(store, url, type) {
    fetchGET(url, 
        (result) => {
            return result.json();
        },
        (result) => {
            store.dispatch({
                type: type,
                state: result
            });
            return result;
        }
    );
};

var fetchHelper = {
    getData: handleGET,
    sendData: handlePOST
};

module.exports = fetchHelper;