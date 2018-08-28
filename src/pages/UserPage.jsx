import React, { Component } from "react";
import { Table, Head, Body, Row, Data } from "components/common/table/Table";
import firebase from "firebase";
import UserContainer from "containers/user/UserContainer";
import PopUp from "components/common/popup/PopUp";
import UserForm from "containers/user/UserForm";

const objToArr = data => Object.keys(data).map(el => ({ ...data[el], id: el }));

export class UserPage extends Component {
  state = { ambassadors: [], onEdit: null };
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
  onEdit = id => {
    this.setState({
      onEdit: id
    });
  };
  onShowMap = (id, value) => {
    firebase
      .database()
      .ref(`/data/${id}`)
      .update({
        ambassador: value
      });
  };
  onSubmit = data => {
    firebase
      .database()
      .ref(`/data/${data.id}`)
      .update({
        address: data.address,
        email: data.email,
        interest: data.interest,
        name: data.name,
        profile: data.profile
      })
      .then(() => {
        alert("successfully updated " + data.email);
        this.onEdit(null);
      });
  };

  render() {
    const { ambassadors, onEdit } = this.state;
    const editingIndex = ambassadors.findIndex(ele => ele.id == onEdit);
    const data = onEdit ? ambassadors[editingIndex] : {};

    return (
      <div
        style={{ justifyContent: "center" }}
        className="container scrollY flex fluid margin-1"
      >
        {onEdit && (
          <PopUp>
            <UserForm
              onSubmit={this.onSubmit}
              onCancelEdit={this.onEdit}
              data={data}
            />
          </PopUp>
        )}
        <UserContainer
          onEdit={this.onEdit}
          onDelete={() => {}}
          onShowMap={this.onShowMap}
          ambassadors={ambassadors}
        />
      </div>
    );
  }
}

export default UserPage;
