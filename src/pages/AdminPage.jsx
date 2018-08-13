import React, { Component, Fragment } from "react";
import Nav from "components/common/nav/Nav";
import { connect } from "react-redux";
import { Textarea } from "../components/common/form/Form";
import { actFetchPosts } from "../actions/posts/actPosts";
import PostContainer from "../containers/post/PostContainer";

const wrapperStyles = { width: "100%" };
const textareaStyles = { width: "100%", height: "500px", padding: "1rem" };
const nav = {
  edit: ["Bold", "Italic", "Heading", "Link", "Image"],
  post: ["Add"]
};

class AdminPage extends Component {
  state = { onView: false, onEdit: false };

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { onEdit } = this.state;
    const { posts } = this.props;
    const ambassadors = Object.keys(posts).map(ele => {
      return posts[ele];
    });
    const allPost = ambassadors.reduce((newArr, ele) => {
      if (ele.post) {
        Object.keys(ele.post).forEach(id => {
          newArr.push({
            postId: id,
            email: ele.email,
            name: ele.name,
            profile: ele.profile,
            ...ele.post[id]
          });
        });
      }
      return newArr;
    }, []);

    const showNav = onEdit ? nav.edit : nav.post;
    const body = onEdit ? (
      <Textarea style={textareaStyles} />
    ) : (
      <PostContainer onView={this.onView} posts={allPost} />
    );
    return (
      <div style={wrapperStyles}>
        <Nav>
          <Nav.List>
            {showNav.map(ele => {
              return <Nav.Item key={ele}>{ele}</Nav.Item>;
            })}
          </Nav.List>
        </Nav>
        <div>{body}</div>
      </div>
    );
  }
}

const mapState = state => ({
  posts: state.posts
});

const mapDispatch = {
  fetchPosts: actFetchPosts
};

export default connect(
  mapState,
  mapDispatch
)(AdminPage);