module.exports = (state = [], action) => {
    switch (action.type) {
        case 'SET_ANNOUNCEMENTS':
            return action.state;
        default:
            return state;
    }
};