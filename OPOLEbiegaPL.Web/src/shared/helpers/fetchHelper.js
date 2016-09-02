import * as ToastrHelper from './toastrHelper';
import * as ActionTypes from '../constants/action_types';

function onSuccess(result) {
    ToastrHelper.removeAllToastrs();
    return result.json();
};

function onError() {
    ToastrHelper.requestResult({
        ContentType: 'Error',
        Data: 'Nie można połączyć z serwerem'
    });
};

function enforcePOST(result, store, action) {
    if (result) {
        ToastrHelper.requestResult(result);
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
}

function enforceGET(result, store, type) {
    if (result) {
        store.dispatch({
            type: type,
            state: result
        });
    }
}

function handleGET (store, url, type) {
    ToastrHelper.requestInProsess();
    fetch(url, {
        method: 'GET',
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    }).then(onSuccess, onError).then((result) => enforceGET(result, store, type));
};

function handlePOST (action, store) {
    ToastrHelper.requestInProsess();
    fetch(action.meta.url, {
        method: action.meta.method,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.entry)
    }).then(onSuccess, onError).then((result) => enforcePOST(result, store, action));
};

var fetchHelper = {
    getData: handleGET,
    sendData: handlePOST
};

module.exports = fetchHelper;