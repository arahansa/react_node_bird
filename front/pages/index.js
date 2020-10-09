import React, { useEffect } from 'react';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {useDispatch, useSelector} from "react-redux";


const Home = () => {

    const { isLoggedIn, user } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();
    console.log("user in index :", user);
    useEffect(() => {
        dispatch({
            type:"HELLO_SAGA"
        });
    }, []);

    return (
        <div>
            { user ? <div>로그인 했습니다 : {user.nickname} </div> : <div>로그아웃 했습니다.</div> }
            {isLoggedIn && <PostForm/>}
            {mainPosts.map((c)=>{
                return (<PostCard key={c} post={c}></PostCard>);
            })}
        </div>
    );
};

export default Home;
