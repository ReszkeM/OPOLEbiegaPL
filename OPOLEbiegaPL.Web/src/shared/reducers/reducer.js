import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import modal from '../../modal/reducers/modal_reducer';
import places from '../../places/reducers/places_reducer';
import friends from '../../friends/reducers/friends_reducer';
import persons from '../../persons/reducers/persons_reducer';
import events from '../../events/reducers/events_reducer';
import announcements from '../../announcements/reducers/announcements_reducer';

module.exports = combineReducers({
    places,
    friends,
    persons,
    events,
    announcements,
    modal,
    toastr
});