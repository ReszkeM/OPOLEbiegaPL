module.exports = (state = [], action) => {
    switch (action.type) {
        case 'SET_FRIENDS':
            return action.state;
        default:
            return state;
    }
};