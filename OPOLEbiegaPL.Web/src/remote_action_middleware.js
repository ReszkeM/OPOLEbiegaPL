import * as fetchHelper from './helpers/fetchHelpers';

export default store => next => action => {
    if (action.meta && action.meta.remote) {
        if (action.meta.method === 'GET') {
            fetchHelper.getData(store, action.meta.url, action.meta.propName);
        } else {
            fetchHelper.sendData(action, store);
        }
    }
    if (action.type === 'SET_INITIAL_STATE') {
        fetchHelper.getInitialData(action, store);
    }
    return next(action);
}