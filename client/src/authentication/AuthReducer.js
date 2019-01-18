import intialState from '../initialState';
import * as types from './AuthActionTypes';

function authActionsReducer(state = intialState.user, action) {
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