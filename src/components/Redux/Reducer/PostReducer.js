import {
    GET_POST_FAILED,
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
} from "../Constants/PostConstatnts";

const initialState = {
    isLoading: false,
    posts: [],
    error: null,
};
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_POST_SUCCESS:
            return {
                isLoading: false,
                posts: action.payload,
                error: null,
            };

        case GET_POST_FAILED:
            return {
                isLoading: false,
                posts: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

export default postsReducer;
