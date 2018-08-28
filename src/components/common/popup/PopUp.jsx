import React from "react";

const PopUp = ({ children, ...rest }) => {
  return (
    <div {...rest} className="popup">
      {children}
    </div>
  );
};

export default PopUp;
