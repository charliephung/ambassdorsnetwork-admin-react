import React from "react";
import Post from "../../components/post/Post";

const PostContainer = props => {
  return (
    <div className="flex flex-wrap">
      {props.posts.map((ele, index) => {
        return <Post key={index} post={ele} />;
      })}
    </div>
  );
};

export default PostContainer;
