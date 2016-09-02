import * as fetchHelper from '../helpers/fetchHelper';
import * as requestTypes from '../constants/request_types';

export default store => next => action => {
    if (action.meta && action.meta.remote) {
        if (action.meta.method === requestTypes.GET) {
            fetchHelper.getData(store, action.meta.url, action.meta.type);
        } else {
            fetchHelper.sendData(action, store);
        }
    }
    return next(action);
}