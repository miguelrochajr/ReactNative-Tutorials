import { 
        EMAIL_CHANGED, 
        PASSWORD_CHANGED 
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            // refer to S16L114/115 to understand this line
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
