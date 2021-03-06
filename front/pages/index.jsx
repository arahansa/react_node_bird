import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log('user in index :', user);
  useEffect(() => {
    dispatch({ type: 'HELLO_SAGA' });
    dispatch({ type: 'HELLO_SAGA' });
    dispatch({ type: 'HELLO_SAGA' });
    dispatch({ type: 'HELLO_SAGA' });
  }, []);

  return (
    <div>
      { user ? (
        <div>
          로그인 했습니다 : {user.nickname}
        </div>
      ) : <div>로그아웃 했습니다.</div> }
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => (<PostCard key={c} post={c} />))}
    </div>
  );
};

export default Home;
