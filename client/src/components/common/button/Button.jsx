import React from "react";

export const Button = props => {
  const { children, className, ...rest } = props;
  return (
    <button {...rest} className={`btn ${className ? className : ""}`}>
      {children}
    </button>
  );
};
