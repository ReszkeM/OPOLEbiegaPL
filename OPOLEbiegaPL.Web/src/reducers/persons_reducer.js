module.exports = (state = [], action) => {
    switch (action.type) {
        case 'SET_PERSONS':
            return action.state;
        default:
            return state;
    }
};