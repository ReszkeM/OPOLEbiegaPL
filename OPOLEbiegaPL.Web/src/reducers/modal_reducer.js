function setState(state, newState) {
    return Object.assign({}, state, newState);
}

var initialState = {
    isPopupVisible: false, 
    isEditMode: false,
    object: {},
    title: ''
}

module.exports = (state = initialState, action) => {
    switch (action.type) {
        case 'CLOSE':
            return setState(state, initialState);
        case 'OPEN':
            return setState(state, action.state);
        case 'SET_OBJECT':
            return setState(state, action.state);
        default:
            return state;
    }
};