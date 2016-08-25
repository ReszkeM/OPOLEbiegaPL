import * as fetchHelper from './helpers/fetchHelpers';

export default store => next => action => {
  console.log("server-side acton");
    if (action.meta && action.meta.remote) {
        if (action.meta.method === 'GET') {
            fetchHelper.getData(action, store);
        } else {
            fetchHelper.sendData(action, store);
        }
    }
    return next(action);
}
