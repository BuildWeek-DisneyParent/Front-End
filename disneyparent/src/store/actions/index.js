import axios from 'axios';

export const FETCHING_POST_DATA_START = "FETCHING_POST_DATA_START";
export const FETCHING_POST_DATA_SUCCESS = "FETCHING_POST_DATA_SUCCESS";
export const FETCHING_POST_DATA_FAILURE = "FETCHING_POST_DATA_FAILURE";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const getPostData = () => dispatch => {
    dispatch({ type: FETCHING_POST_DATA_START });
    axios
        .get()
        .then(res => dispatch({ type: FETCHING_POST_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_POST_DATA_FAILURE, payload: err }))
};

export const userLogIn = () => dispatch => {
    dispatch({ type: USER_LOGIN_START });
    axios
        .get()
        .then(res => dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: USER_LOGIN_FAILURE, payload: err }))
};