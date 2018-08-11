import React from "react";

export const Heading1 = props => {
  const { children, ...rest } = props;
  return (
    <h1 {...rest} className="heaing-1">
      {children}
    </h1>
  );
};
export const Heading2 = props => {
  const { children, ...rest } = props;
  return (
    <h1 {...rest} className="heaing-2">
      {children}
    </h1>
  );
};
export const Heading3 = props => {
  const { children, ...rest } = props;
  return (
    <h1 {...rest} className="heaing-3">
      {children}
    </h1>
  );
};
export const Heading4 = props => {
  const { children, ...rest } = props;
  return (
    <h1 {...rest} className="heaing-4">
      {children}
    </h1>
  );
};
