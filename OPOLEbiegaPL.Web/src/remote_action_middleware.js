import * as fetchHelper from './helpers/fetchHelpers';

export default store => next => action => {
    if (action.meta && action.meta.remote) {
        if (action.meta.method === 'POST') {
            fetchHelper.sendData(action, store);
        }
        if (action.meta.method === 'GET') {
            fetchHelper.getData(action, store);
        }
    } 
    return next(action);
}