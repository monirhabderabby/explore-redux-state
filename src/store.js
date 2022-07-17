import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./components/Redux/Reducer/PostReducer";

const store = createStore(postsReducer, applyMiddleware(thunk));

export default store;
