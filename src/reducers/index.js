import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_ENQUIRY_TYPES_REQUEST,
    FETCH_ENQUIRY_TYPES_SUCCESS,
    SEND_MESSAGE
} from '../actions/actionsTypes';

const categoriesState = {
    categories: [],
    isFetching: false,
    error: false
};

const typesState = {
    isFetching: false,
    types: [],
    answer: false
};

const categoriesReducer = (state = categoriesState, { type, payload }) => {
    switch (type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: payload.data
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                error: {
                    status: payload.status,
                    statusText: payload.data.error.message,
                    description: payload.data.error.description
                }
            };

        default:
            return state;
    }
};

const typesReducer = (state = typesState, { type, payload }) => {
    switch (type) {
        case FETCH_ENQUIRY_TYPES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_ENQUIRY_TYPES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                types: payload.data
            };
        case SEND_MESSAGE: {
            return {
                ...state,
                answer: payload.data.message
            }
        }
        default:
            return state;
    }
};

export default combineReducers({
    typesReducer,
    categoriesReducer,
    form: formReducer
});
