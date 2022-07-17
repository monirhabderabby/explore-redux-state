import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllPost from "./Redux/Action/PostAction";

const Home = () => {
    const { isLoading, posts, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPost());
    }, [dispatch]);
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <p>{error.message}</p>}
            <section>
                {posts?.map((post) => (
                    <p>{post.title}</p>
                ))}
            </section>
        </div>
    );
};

export default Home;
