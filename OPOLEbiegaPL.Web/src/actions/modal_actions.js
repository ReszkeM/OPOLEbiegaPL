import * as ActionTypes from '../constants/action_types';

export function showWindow(state) {
    return {
        type: ActionTypes.OPEN,
        state
    }
}

export function hideWindow() {
    return {
        type: ActionTypes.CLOSE
    }
}