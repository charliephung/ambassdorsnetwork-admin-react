import React, { Component } from "react";

export const Label = props => {
  const { htmlFor = "", className, children, ...rest } = props;
  return (
    <label
      {...rest}
      htmlFor={htmlFor}
      className={`label ${className ? className : ""}`}
    >
      {children}
    </label>
  );
};

export const Textarea = props => {
  const { className, node, ...rest } = props;
  return (
    <textarea
      {...rest}
      ref={node}
      className={`form__input ${className ? className : ""}`}
    />
  );
};

export const Input = props => {
  const { type = "text", className, ...rest } = props;
  return (
    <input
      {...rest}
      className={`form__input ${className ? className : ""}`}
      type={type}
    />
  );
};

export const Select = props => {
  const { children, className, ...rest } = props;
  return (
    <select className={`form__input ${className ? className : ""}`} {...rest}>
      {children}
    </select>
  );
};

export const Option = props => {
  const { children, className, ...rest } = props;
  return (
    <option className={`form__input ${className ? className : ""}`} {...rest}>
      {children}
    </option>
  );
};

export const Control = props => {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} className={`form__control ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export const Group = props => {
  const { children, className, ...rest } = props;
  return (
    <div className={`form__group ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export class Form extends Component {
  static Group = Group;
  static Control = Control;
  static Input = Input;
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <form {...rest} className={`form ${className ? className : ""}`}>
        {children}
      </form>
    );
  }
}

export default Form;
