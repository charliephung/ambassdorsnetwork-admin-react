import React, { Component } from "react";

const Item = props => {
  const { children, className, ...rest } = props;
  return (
    <li {...rest} className={`navbar__item ${className ? className : ""}`}>
      {children}
    </li>
  );
};

const List = props => {
  const { children, className, ...rest } = props;
  return (
    <ul {...rest} className={`navbar__list  ${className ? className : ""}`}>
      {children}
    </ul>
  );
};

export class Navbar extends Component {
  static List = List;
  static Item = Item;
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <nav {...rest} className={`navbar ${className ? className : ""}`}>
        {children}
      </nav>
    );
  }
}

export default Navbar;
