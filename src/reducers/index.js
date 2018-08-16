import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from '../actions/actionsTypes';

const initialState = {
    categories: [],
    isFetching: false,
    error: false
};

const categoriesReducer = (state = initialState, { type, payload }) => {
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

export default combineReducers({
    categoriesReducer,
    form: formReducer
});
