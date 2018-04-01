export default (state = null, action) => {
    switch(action.types) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};