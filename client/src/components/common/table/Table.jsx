import React, { Component } from "react";

export const Head = props => {
  const { children, className, ...rest } = props;
  return (
    <thead {...rest} className={`table__head ${className ? className : ""}`}>
      {children}
    </thead>
  );
};
export const Body = props => {
  const { children, className, ...rest } = props;
  return (
    <tbody {...rest} className={`table__body ${className ? className : ""}`}>
      {children}
    </tbody>
  );
};
export const Row = props => {
  const { children, className, ...rest } = props;
  return (
    <tr {...rest} className={`table__row ${className ? className : ""}`}>
      {children}
    </tr>
  );
};
export const Data = props => {
  const { children, className, ...rest } = props;
  return (
    <td {...rest} className={`table__data ${className ? className : ""}`}>
      {children}
    </td>
  );
};

export class Table extends Component {
  static Head = Head;
  static Body = Body;
  static Row = Row;
  static Data = Data;
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <table {...rest} className={`table ${className ? className : ""}`}>
        {children}
      </table>
    );
  }
}
