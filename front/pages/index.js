import React from 'react';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User:{
            id:1,
            nickname:'아라한사',
        },
        content:'첫번째 게시글',
        img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        createdAt : '1',
    }],
};

const Home = () => {
    return (
        <div>
            {dummy.isLoggedIn && <PostForm/>}
            {dummy.mainPosts.map((c)=>{
                return (<PostCard key={c} post={c}></PostCard>);
            })}
        </div>
    );
};

export default Home;
