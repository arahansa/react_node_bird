import React from 'react';
import { Form, Input, Button, Card, Avatar} from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
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
            {dummy.isLoggedIn && <Form encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{float:'right'}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {dummy.imagePaths.map((v,i) => {
                  return (
                      <div key={v} style={{display:'inline-block'}}>
                          <img src={'http://localhost:3065/'+v} style={{width: '200px'}} alt={v}/>
                          <div>
                              <Button>제거</Button>
                          </div>
                      </div>
                  )
                })}
            </div>
            </Form>}
            {dummy.mainPosts.map((c)=>{
                return(
                    <Card
                        key={+c.createdAt}
                        cover={c.img && <img alt="example" src={c.img}/>}
                        actions={[
                            <RetweetOutlined type="retweet" key="retwwet"/>,
                            <HeartOutlined type="heart" key="heart"/>,
                            <MessageOutlined type="message" key="message"/>,
                            <EllipsisOutlined type="ellipsis" key="ellipsis"/>,
                        ]}
                        extra={<Button>팔로우</Button>}
                    >
                        <Card.Meta
                            avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                            title={c.User.nickname}
                            description={c.content}
                        />
                    </Card>
                )
            })}
        </div>
    );
};

export default Home;
