import React, { Component } from "react";
import PropTypes from "prop-types";

export class DynamicImport extends Component {
  state = { Comp: null };
  componentDidMount() {
    this.props.load().then(component => {
      this.setState(() => ({
        component: component.default ? component.default : component
      }));
    });
  }
  render() {
    return this.props.render(this.state.Comp);
  }
}

Greeting.propTypes = {
  load: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
};

export default DynamicImport;
