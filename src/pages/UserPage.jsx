import React, { Component } from "react";
import { Table, Head, Body, Row, Data } from "components/common/table/Table";
import { Button } from "components/common/button/Button";

export class UserPage extends Component {
  render() {
    return (
      <div
        style={{ justifyContent: "center" }}
        className="container scrollY flex fluid margin-1"
      >
        <Table>
          <Head>
            <Row>
              <Data>Profile</Data>
              <Data>Email</Data>
              <Data>Name</Data>
              <Data>Posts</Data>
              <Data>OnMap</Data>
              <Data>Edit</Data>
            </Row>
          </Head>
          <Body>
            <Row className="border-bottom">
              <Data width="20%">
                <img
                  style={{ width: "120px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/ambassadorsnetwork-f2db0.appspot.com/o/profile%2Fanya.sk.rus%40gmail.com719a6d-58e1e7-d5abf3img_1990.jpg?alt=media&token=87cc630c-57e9-4be2-abce-dc18cadfa768"
                  alt=""
                />
              </Data>
              <Data width="20%">anya.sk.rus@gmail.com</Data>
              <Data width="15%">Anna Skuratova</Data>
              <Data width="10%">1</Data>
              <Data width="15%">
                <Button className="btn--green">Active</Button>
              </Data>
              <Data width="20%">
                <Button className="btn--orange">Edit</Button>
                &nbsp;
                <Button className="btn--red">Delete</Button>
              </Data>
            </Row>
          </Body>
        </Table>
      </div>
    );
  }
}

export default UserPage;
