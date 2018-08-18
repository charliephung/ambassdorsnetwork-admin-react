import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ImagePage extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return <h1>Image</h1>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePage);
