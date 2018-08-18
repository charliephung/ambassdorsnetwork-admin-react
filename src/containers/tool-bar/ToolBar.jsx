import React from "react";
import Navbar from "components/common/nav/Nav";
const ToolBar = props => {
  const items = props.items.map((child, index) => {
    return (
      <Navbar.Item
        key={index}
        style={{ alignItems: "center" }}
        className="navbar__item--edit flex"
      >
        {child.main}
      </Navbar.Item>
    );
  });
  return (
    <Navbar className="navbar--dark ">
      <Navbar.List>{items}</Navbar.List>
    </Navbar>
  );
};

export default ToolBar;
