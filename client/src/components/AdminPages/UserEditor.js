import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { editUser, hideEdit, addUser } from "../../actions/adminActions";
import { showAlert } from "../../actions/authActions";

function UserEditor(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = props.editUsr.user;
    if(user){
      setName(user.name);
      setSurname(user.surname);
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [props]);

  const inputHandler = (e, keywrd) => {
    switch (keywrd) {
      case "name":
        return setName(e.target.value);
      case "surname":
        return setSurname(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "pswd":
        return setPassword(e.target.value);
    }
  };

  const editUser = () => {
    if(name && surname && email && password){
      if(email.includes("@gmail.com")){
        props.history.push("/adminpage");
        props.editUser({
          name,
          surname,
          email,
          password,
          id: props.editUsr.user.id,
        });
      }else{props.showAlert("Email must have @gmail.com!")}
    }else{props.showAlert("Please fill in all fields!")}
  };
  const addUser = () => {
    if(name && surname && email && password){
      if(email.includes("@gmail.com")){
        props.history.push("/adminpage");
        props.addUser({
          name,
          surname,
          email,
          password,
          id: uuidv4(),
          avatar: ""
        });
      }else{props.showAlert("Email must have @gmail.com!")}
    }else{props.showAlert("Please fill in all fields!")}
  };
  const cancelEdit = () => {
    props.history.push("/adminpage");
    props.hideEdit();
  };

  // if (props.auth) {
  //   if (props.auth.isAdmin) {
  return (
    <div className="modal adm-modal flex flex-drctCol flex-vertCntr flex-spcarrnd flex-horCntr  ">
      <h3 className="flex flex-centered">{props.editUsr.user!==null ? "Edit" : "Add"} user</h3>
      <div className="flex flex-centered">
        <h4 className="adm-width_5vw">Name:&nbsp;&nbsp;</h4>
        <input
          onChange={(e) => inputHandler(e, "name")}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="flex flex-centered">
        <h4 className="adm-width_5vw">Surname:&nbsp;&nbsp;</h4>
        <input
          onChange={(e) => inputHandler(e, "surname")}
          type="text"
          name="surname"
          placeholder="Surname"
          value={surname}
        />
      </div>
      <div className="flex flex-centered">
        <h4 className="adm-width_5vw">Email:&nbsp;&nbsp;</h4>
        <input
          onChange={(e) => inputHandler(e, "email")}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
        />
      </div>
      <div className="flex flex-centered">
        <h4 className="adm-width_5vw">Password:&nbsp;&nbsp;</h4>
        <input
          onChange={(e) => inputHandler(e, "pswd")}
          type="text"
          name="password"
          placeholder="Password"
          value={password}
        />
      </div>
      <div className="flex flex-spcarrnd flex-vertCntr adm-width_10vw">
        {props.editUsr.user!==null ? (
          <button onClick={editUser} className="adm-button adm-button_edit">
            Edit
          </button>
        ) : (
          <button onClick={addUser} className="adm-button adm-button_add adm-width_3vw">
            Add
          </button>
        )}
        <button onClick={cancelEdit} className="adm-button adm-button_delete">
          Cancel
        </button>
      </div>
    </div>
  );
  {
    /* } else {
      return (
        <div className="flex flex-centered flex-drctCol full-window">
          You are not an admin!
        </div>
      );
    }
  }else{
      return (
        <div className="flex flex-centered flex-drctCol full-window">
          You were not authenticated!
        </div>
      );
  } */
  }
}

UserEditor.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    editUsr: state.admin.editUsr,
  };
};
const mapDispatchToProps = {
  editUser,
  hideEdit,
  addUser,
  showAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditor);
