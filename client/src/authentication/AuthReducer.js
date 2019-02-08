//@flow
import intialState from '../initialState';
import * as types from './AuthActionTypes';


type Action = { type: typeof types.LOGOUT_SUCCESS } | { type: typeof types.LOGOUT_FAILED } | { type: typeof types.LOGIN_SUCCESS } | { type: typeof types.LOGIN_FAILED };

type UserState = {
    authenticated: boolean,
    authError: boolean
}

function authActionsReducer(state: UserState = intialState.user, action: Action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, { authenticated: true, authError: false });
        case types.LOGIN_FAILED:
            return Object.assign({}, state, { authError: true });
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, { authenticated: false });
        case types.LOGOUT_FAILED:
            return Object.assign({}, state, { authenticated: true });
        default:
            return state;
    }
}

export default authActionsReducer;