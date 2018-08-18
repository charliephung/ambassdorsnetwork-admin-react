import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/common/button/Button";

const Post = props => {
  const { post } = props;
  const { status } = post;
  const isNews = status.newsAndEvents ? "btn--green" : "btn--orange";
  const isBlog = status.blogs ? "btn--green" : "btn--orange";

  return (
    <div className="post margin-1">
      <Link to={"/posts/" + post.id + "/post/" + post.postId}>
        <p className="post__heading">{post.heading}</p>
        <img className="post__image" src={post.image} />
        <p className="post__email">{post.email}</p>
        <p>Date: {post.date.day}</p>
        <p>Time: {post.date.time}</p>
        <p />
      </Link>
      <Button className={isNews}>News</Button>
      &nbsp;
      <Button className={isBlog}>Blog</Button>
    </div>
  );
};

export default Post;
