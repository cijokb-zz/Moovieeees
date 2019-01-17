import intialState from '../initialState';
import * as types from './ActionTypes';

function authActionsReducer(state = intialState.user, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, { authenticated: true });
        case types.LOGIN_FAILED:
            return Object.assign({}, state, { authenticated: false });
        default:
            return state;
    }
}

export default authActionsReducer;