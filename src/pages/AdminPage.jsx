import React, { Component, Fragment } from "react";
import { FaPlus, FaImages } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actFetchPosts } from "actions/posts/actPosts";
import PostContainer from "containers/post/PostContainer";
import ToolBar from "containers/tool-bar/ToolBar";
import { Input, Control, Label } from "components/common/form/Form";
import {
  actViewPost,
  actCreatePost,
  actUpdateStatus
} from "actions/posts/actPosts";

const toolsBar = [
  {
    main: (
      <Link to="/posts/create">
        <FaPlus style={{ height: "100%" }} />
      </Link>
    )
  },
  {
    main: (
      <Link to="/posts/image">
        <FaImages style={{ height: "100%" }} />
      </Link>
    )
  }
];

class AdminPage extends Component {
  componentDidMount() {
    this.props.actFetchPosts();
  }
  componentWillUnmount() {
    this.props.actViewPost({});
  }

  render() {
    const { posts, actUpdateStatus } = this.props;
    const ambassadors = Object.keys(posts).map(ele => {
      return { post: posts[ele], id: ele };
    });
    const allPost = ambassadors.reduce((newArr, ele) => {
      if (ele.post.post) {
        Object.keys(ele.post.post).forEach(id => {
          newArr.push({
            id: ele.id,
            postId: id,
            email: ele.post.email,
            name: ele.post.name,
            profile: ele.post.profile,
            ...ele.post.post[id]
          });
        });
      }
      return newArr;
    }, []);

    const body = (
      <PostContainer
        actUpdateStatus={actUpdateStatus}
        onView={this.onView}
        posts={allPost}
      />
    );
    return (
      <div>
        <ToolBar items={toolsBar} />
        <div className="scrollY">{body}</div>
      </div>
    );
  }
}

const mapState = state => ({
  posts: state.posts
});

const mapDispatch = {
  actFetchPosts,
  actViewPost,
  actUpdateStatus
};

export default connect(
  mapState,
  mapDispatch
)(AdminPage);
