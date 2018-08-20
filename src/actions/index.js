import axios from 'axios';

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_ENQUIRY_TYPES_REQUEST,
    FETCH_ENQUIRY_TYPES_SUCCESS,
    SEND_MESSAGE
} from './actionsTypes';

const API_KEY = '9bb415ba4a04772079c879e4d02ae82b9839298f';
const URL_CATEGORIES = 'http://504080.com/api/v1/services/categories';
const URL_TYPES = 'http://504080.com/api/v1/directories/enquiry-types';
const URL_SUPPORT = 'http://504080.com/api/v1/support';

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
        .get(`${URL_CATEGORIES}`, config)
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

export const fetchTypes = () => dispatch => {
    dispatch({
        type: FETCH_ENQUIRY_TYPES_REQUEST,
        payload: null
    });

    axios.get(`${URL_TYPES}`).then(response =>
        dispatch({
            type: FETCH_ENQUIRY_TYPES_SUCCESS,
            payload: response.data
        })
    );
};

export const sendMessage = message => dispatch => {
    axios
        .post(`${URL_SUPPORT}`, message, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response =>
            dispatch({
                type: SEND_MESSAGE,
                payload: response.data
            })
        );
};
