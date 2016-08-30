import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import modal from './modal_reducer';
import friends from './friends_reducer';
import persons from './persons_reducer';
import events from './events_reducer';
import announcements from './announcements_reducer';

module.exports = combineReducers({
    friends,
    persons,
    events,
    announcements,
    modal,
    toastr
});