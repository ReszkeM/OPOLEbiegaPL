module.exports = (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return action.state;
        default:
            return state;
    }
};