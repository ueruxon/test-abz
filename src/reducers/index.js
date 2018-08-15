import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from '../actions/actionsTypes';

const initialState = {
    categories: null,
    isFetching: false
};

export default (state = initialState, { type, payload }) => {
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
            console.log(payload);
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
};
