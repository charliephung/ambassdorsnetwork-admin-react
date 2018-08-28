import React, { Component } from "react";
import { Table, Head, Body, Row, Data } from "components/common/table/Table";
import firebase from "firebase";
import UserContainer from "containers/user/UserContainer";

const objToArr = data => Object.keys(data).map(el => data[el]);

export class UserPage extends Component {
  state = { ambassadors: [] };
  ambassadorsListner = firebase.database().ref("/data");

  setContent = val => {
    this.setState({
      ambassadors: objToArr(val.val())
    });
  };
  componentDidMount() {
    this.ambassadorsListner.on("value", this.setContent);
  }
  componentWillUnmount() {
    this.ambassadorsListner.off("value", this.setContent);
  }
  render() {
    const { ambassadors } = this.state;
    return (
      <div
        style={{ justifyContent: "center" }}
        className="container scrollY flex fluid margin-1"
      >
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
            <UserContainer ambassadors={ambassadors} />
          </Body>
        </Table>
      </div>
    );
  }
}

export default UserPage;
