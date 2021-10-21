import { TO_LOGIN } from "./types";
const initialState = {
    sysLogIn: 'developer21',
    sysPwd: '123456',
    session: false,
};
export function authyReducer(state = initialState, action) {
    switch (action.type) {
        case TO_LOGIN:
            return {
                ...state,
                session: true,
            };
        default:
            return state;
    }
};