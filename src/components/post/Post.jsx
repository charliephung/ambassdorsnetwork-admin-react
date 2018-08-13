import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  const { post } = props;
  return (
    <div className="post margin-1">
      <Link to={"/post/" + post.postId}>
        <p className="post__heading">{post.heading}</p>
        <img className="post__image" src={post.profile} />
        <p className="post__email">{post.email}</p>
        <p>Date: {post.date.day}</p>
        <p>Time: {post.date.time}</p>
        <p />
      </Link>
    </div>
  );
};

export default Post;
