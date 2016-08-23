import {setState} from './action_creators';
import * as fetchHelper from './helpers/fetchHelpers';

export default store => next => action => {
    if (action.meta && action.meta.remote) {
        if (action.meta.method === 'POST') {
            fetchHelper.fetchPOST(action.meta.url, action.entry, function(result) {
                console.log(result);
                if (result.ok) {
                    switch(action.meta.propName) {
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
        }
        if (action.meta.method === 'GET') {
            if (action.meta.propsToUpdate.indexOf('Friends') !== -1)
                fetchHelper.fetchGET('http://localhost:57174/api/FriendApi/GetAll', function(result) {
                    store.dispatch({
                        type: 'SET_STATE',
                        state: {
                            friends: result
                        }
                    });
                    return result;
                });

            if (action.meta.propsToUpdate.indexOf('Events') !== -1)
                fetchHelper.fetchGET('http://localhost:57174/api/EventApi/GetAll', function(result) {
                    store.dispatch({
                        type: 'SET_STATE',
                        state: {
                            events: result
                        }
                    });
                    return result;
                });

            if (action.meta.propsToUpdate.indexOf('Persons') !== -1)
                fetchHelper.fetchGET('http://localhost:57174/api/PersonApi/GetAll', function(result) {
                    store.dispatch({
                        type: 'SET_STATE',
                        state: {
                            persons: result
                        }
                    });
                    return result;
                });

            if (action.meta.propsToUpdate.indexOf('Announcements') !== -1)
                fetchHelper.fetchGET('http://localhost:57174/api/AnnouncementApi/GetAll', function(result) {
                    store.dispatch({
                        type: 'SET_STATE',
                        state: {
                            announcements: result
                        }
                    });
                    return result;
                });
        }
    } 
    return next(action);
}