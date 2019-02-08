const initialState = {
    user: {
        name: null,
        email: null,
        authenticated: false,
        authError: false,
    },
    movies:
    {
        all: [],
        fliterSet: [],
        filter: ''
    }
};

export default initialState;