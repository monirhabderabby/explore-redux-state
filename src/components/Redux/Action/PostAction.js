import axios from "axios";
import {
    GET_POST_FAILED,
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
} from "../Constants/PostConstatnts";

const getAllPost = () => async (dispatch) => {
    try {
        dispatch({ type: GET_POST_REQUEST });
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        dispatch({ type: GET_POST_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_POST_FAILED, payload: error.message });
    }
};

export default getAllPost;
