import {
    FETCHING_POST_DATA_START,
    FETCHING_POST_DATA_SUCCESS,
    FETCHING_POST_DATA_FAILURE,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../actions/';

const initialState = {
    isFetching: false,
    isLoggingIn: false,
    post: {
        id: null,
        title: '',
        content: '',
    },
    posts: [],
    user: {
        id: null,
        name: ''
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POST_DATA_START:
            return {
                isFetching: true
            };
        default:
            return state;
    }
}

export default reducer;