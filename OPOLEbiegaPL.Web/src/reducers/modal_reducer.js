function setState(state, newState) {
    return Object.assign({}, state, newState);
}

module.exports = (state = { isPopupVisible: false, isEditMode: false}, action) => {
    switch (action.type) {
        case 'CLOSE':
            return setState(state, { isPopupVisible: false });
        case 'OPEN':
            return setState(state, action.state);
        default:
            return state;
    }
};