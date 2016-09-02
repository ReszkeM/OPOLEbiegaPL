import * as ActionTypes from '../../shared/constants/action_types';

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