import React from 'react';
import { Button, Card, Avatar } from 'antd';
import {
  RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => (
  <Card
    key={+post.createdAt}
    cover={post.img && <img alt="example" src={post.img} />}
    actions={[
      <RetweetOutlined type="retweet" key="retwwet" />,
      <HeartOutlined type="heart" key="heart" />,
      <MessageOutlined type="message" key="message" />,
      <EllipsisOutlined type="ellipsis" key="ellipsis" />,
    ]}
    extra={<Button>팔로우</Button>}
  >
    <Card.Meta
      avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
      title={post.User.nickname}
      description={post.content}
    />
  </Card>
);

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default PostCard;
