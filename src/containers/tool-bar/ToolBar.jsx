import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "components/common/nav/Nav";
import { Input, Control, Label } from "components/common/form/Form";
const ToolBar = ({ onToggleEditor }) => {
  return (
    <Navbar className="navbar--dark ">
      <Navbar.List>
        <Navbar.Item
          // onClick={onToggleEditor}
          className="navbar__item--edit"
        >
          <Link to="/posts/create">
            <FaPlus style={{ height: "100%" }} />
          </Link>
        </Navbar.Item>
        <Navbar.Item className="navbar__item--edit ">
          <Control className="flex">
            <Label htmlFor="search">
              <FaSearch style={{ height: "100%" }} />
            </Label>
            &nbsp;
            <Input style={{ height: "100%" }} id="search" />
          </Control>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  );
};

export default ToolBar;
