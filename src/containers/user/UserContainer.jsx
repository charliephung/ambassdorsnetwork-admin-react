import React from "react";
import PropTypes from "prop-types";

import { Table, Head, Body, Row, Data } from "components/common/table/Table";
import { Button } from "components/common/button/Button";

const UserRow = ({
  email,
  name,
  post,
  ambassador,
  active,
  id,
  onEdit,
  onShowMap,
  onDelete
}) => {
  return (
    <Row className={`border-bottom ${active ? "bg-color-green" : ""}`}>
      <Data width="30%">{email}</Data>
      <Data width="25%">{name}</Data>
      <Data width="10%">
        {post && typeof post == "object" ? Object.keys(post).length : 0}
      </Data>
      <Data width="15%">
        {ambassador ? (
          <Button
            onClick={() => onShowMap(id, !ambassador)}
            className="btn--green"
          >
            Show
          </Button>
        ) : (
          <Button
            onClick={() => onShowMap(id, !ambassador)}
            className="btn--orange"
          >
            Hide
          </Button>
        )}
      </Data>
      <Data width="20%">
        <Button onClick={() => onEdit(id)} className="btn--orange">
          Edit
        </Button>
        &nbsp;
        <Button onClick={() => onDelete(id, email)} className="btn--red">
          Delete
        </Button>
      </Data>
    </Row>
  );
};

UserRow.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  post: PropTypes.object,
  ambassador: PropTypes.bool.isRequired,
  active: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onShowMap: PropTypes.func.isRequired
};

const UserContainer = ({
  ambassadors,
  activeIndex,
  onEdit,
  onShowMap,
  onDelete
}) => {
  return (
    <Table>
      <Head>
        <Row>
          <Data>Email</Data>
          <Data>Name</Data>
          <Data>Posts</Data>
          <Data>OnMap</Data>
          <Data>Edit</Data>
        </Row>
      </Head>
      <Body>
        {ambassadors
          ? ambassadors.map(ele => (
              <UserRow
                onEdit={onEdit}
                onDelete={onDelete}
                onShowMap={onShowMap}
                active={activeIndex == ele.id}
                key={ele.email}
                {...ele}
              />
            ))
          : null}
      </Body>
    </Table>
  );
};

UserContainer.propTypes = {
  ambassadors: PropTypes.array.isRequired,
  activeIndex: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onShowMap: PropTypes.func.isRequired
};

export default UserContainer;
