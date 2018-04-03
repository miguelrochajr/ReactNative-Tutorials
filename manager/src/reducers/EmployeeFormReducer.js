import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' }
            // the [] is a key interpolation, ex: if we call it with the prop of 'name''
            // [action.payload.prop] will be just 'name'
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
