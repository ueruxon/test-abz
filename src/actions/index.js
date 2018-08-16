import axios from 'axios';

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from './actionsTypes';

const API_KEY = '9bb415ba4a04772079c879e4d02ae82b9839298f';
const ROOT_URL = 'http://504080.com/api/v1/services/categories';

const config = {
    headers: {
        authorization: API_KEY
    }
};

export const fetchCategories = () => dispatch => {
    dispatch({
        type: FETCH_CATEGORIES_REQUEST,
        payload: null
    });

    axios
        .get(`${ROOT_URL}`, config)
        .then(response =>
            dispatch({
                type: FETCH_CATEGORIES_SUCCESS,
                payload: response.data
            })
        )
        .catch(error => {
            return dispatch({
                type: FETCH_CATEGORIES_FAILURE,
                payload: error.response
            });
        });
};
