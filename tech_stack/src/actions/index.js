// this function is an action creator
// an object with a type property is an action. And an action and an action is how we cause
// producers to update the data through reducers
//  The action is wrapped by a function, which is the actionCreator
export const selectLibrary = (libraryId) => {
    console.log(libraryId);
    return {
        type: 'select_library',
        payload: libraryId
    };
};