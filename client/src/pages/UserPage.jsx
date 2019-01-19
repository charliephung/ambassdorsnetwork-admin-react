import React, { Component } from "react";
import firebase from "firebase";
import PopUp from "components/common/popup/PopUp";
import DynamicImport from "components/feature/DynamicImport";

const objToArr = data => Object.keys(data).map(el => ({ ...data[el], id: el }));

const UserForm = props => {
  return (
    <DynamicImport
      load={() => import("containers/user/UserForm")}
      render={Comp => (Comp === null ? null : <Comp {...props} />)}
    />
  );
};
const UserContainer = props => {
  return (
    <DynamicImport
      load={() => import("containers/user/UserContainer")}
      render={Comp => (Comp === null ? null : <Comp {...props} />)}
    />
  );
};

export class UserPage extends Component {
  state = { ambassadors: [], onEdit: null, activeIndex: null };
  ambassadorsListner = firebase.database();

  setContent = val => {
    this.setState({
      ambassadors: objToArr(val.val())
    });
  };
  componentDidMount() {
    this.ambassadorsListner.ref("/data").on("value", this.setContent);
  }
  componentWillUnmount() {
    this.ambassadorsListner.ref("/data").off("value", this.setContent);
  }
  onEdit = id => {
    this.setState({
      onEdit: id,
      activeIndex: id
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
    this.ambassadorsListner
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

  onDelete = (id, email) => {
    const input = prompt(
      `Warning!! Delete ${email}\nTo confirm type in:\n${email}`
    );
    if (input === email) {
      const { ambassadors } = this.state;
      const deleteIndex = ambassadors.findIndex(ele => ele.id === id);
      const { post } = ambassadors[deleteIndex];

      this.ambassadorsListner.ref(`/data/${id}`).remove();
      Object.keys(post).forEach(key => {
        this.ambassadorsListner.ref(`/post/${key}`).remove();
      });
    } else {
      alert("Cancel");
    }
  };

  render() {
    const { ambassadors, onEdit, activeIndex } = this.state;
    const editingIndex = ambassadors.findIndex(ele => ele.id === onEdit);
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
          activeIndex={activeIndex}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
          onShowMap={this.onShowMap}
          ambassadors={ambassadors}
        />
      </div>
    );
  }
}

export default UserPage;
