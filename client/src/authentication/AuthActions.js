import { LOGOUT_SUCCESS, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED } from './AuthActionTypes';

const login = (username, password) => {

    //TODO: API and thunk

    if (username === "test" && password === "1234") {
        // console.log("loign sucessfull");
        // localStorage.setItem("userToken", "123456");
        return {
            type: LOGIN_SUCCESS
        }
    }
    else {
        return {
            type: LOGIN_FAILED
        }
    }

};

const logout = () => {
    // localStorage.removeItem("userToken");
    // let userToken = localStorage.getItem("userToken");
    // if (userToken === null) {
    //     return {
    //         type: LOGOUT_SUCCESS

    //     }
    // }
    // else {
    //     return {
    //         type: LOGOUT_FAILED
    //     }
    // }
    return {
        type: LOGOUT_SUCCESS

    };
};

export { login, logout };