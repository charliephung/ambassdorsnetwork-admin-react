import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Textarea } from "components/common/form/Form";
import EditNav from "containers/navbar/EditNav";
import PropTypes from "prop-types";

export class Editor extends Component {
  state = { value: "" };
  isControlled() {
    return this.props.value != null;
  }
  onAdd = (tag, cursorStart, cursorEnd) => {
    const { value } = this.isControlled() ? this.props : this.state;
    const { selectionStart } = this.textarea;
    const newValue = `${value.slice(0, selectionStart)}${tag}${value.slice(
      selectionStart
    )}`;

    if (!this.isControlled()) {
      this.setState(
        {
          value: newValue
        },
        () => {
          this.textarea.setSelectionRange(
            selectionStart + cursorStart,
            selectionStart + cursorStart + cursorEnd
          );
          this.textarea.focus();
        }
      );
    } else {
      this.props.onChange(newValue, () => {
        this.textarea.setSelectionRange(
          selectionStart + cursorStart,
          selectionStart + cursorStart + cursorEnd
        );
        this.textarea.focus();
      });
    }
  };

  onChange = e => {
    if (!this.isControlled()) {
      this.setState(
        {
          value: e.target.value
        },
        () => {
          this.props.onChange(this.state);
        }
      );
    } else {
      this.props.onChange(e.target.value);
    }
  };

  render() {
    const { value } = this.isControlled() ? this.props : this.state;

    return (
      <Fragment>
        <EditNav onAdd={this.onAdd} />
        <Textarea
          node={el => (this.textarea = el)}
          onChange={this.onChange}
          style={{ width: "100%" }}
          name="value"
          className="editor"
          value={value}
          rows="50"
        />
      </Fragment>
    );
  }
}

Editor.propsTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any
};

Editor.defaultProps = {
  onChange: () => {}
};

export default withRouter(Editor);
