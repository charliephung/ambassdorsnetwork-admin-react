import React from "react";
import Post from "./post/Post";

const PostContainer = props => {
  return (
    <div className="flex flex-wrap">
      {props.posts.map((ele, index) => {
        return (
          <Post
            actUpdateStatus={props.actUpdateStatus}
            key={index}
            post={ele}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
