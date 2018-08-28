import React from "react";
import { Table, Head, Body, Row, Data } from "components/common/table/Table";
import { Button } from "components/common/button/Button";

const UserRow = ({ email, name, post, ambassador }) => {
  return (
    <Row className="border-bottom">
      <Data width="30%">{email}</Data>
      <Data width="25%">{name}</Data>
      <Data width="10%">
        {post && typeof post == "object" ? Object.keys(post).length : 0}
      </Data>
      <Data width="15%">
        {ambassador ? (
          <Button className="btn--green">Show</Button>
        ) : (
          <Button className="btn--orange">Hide</Button>
        )}
      </Data>
      <Data width="20%">
        <Button className="btn--orange">Edit</Button>
        &nbsp;
        <Button className="btn--red">Delete</Button>
      </Data>
    </Row>
  );
};

const UserContainer = ({ ambassadors }) => {
  console.log(ambassadors);

  return ambassadors
    ? ambassadors.map(ele => <UserRow key={ele.email} {...ele} />)
    : null;
};

export default UserContainer;
