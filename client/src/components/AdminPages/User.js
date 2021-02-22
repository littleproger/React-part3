import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {showEdit, deleteUser} from '../../actions/adminActions';
import Avatar from "../helpers/Avatar";

function User(props) {
  const editUser = () => {
    props.showEdit(props.userData,props.userData.id);
    props.history.push(`adminpage/modal/${props.userData.id}`)
  }
  const deleteUser = () =>{
    props.deleteUser(props.userData.id);
  }
  return (
    <div className="flex userlist-size marg-t_20px">
      <Avatar src={props.userData.avatar} />
      <div className="flex flex-centered userInfo-size">
        {`${props.userData.name} ${props.userData.surname} `}
      </div>
      <div className="flex flex-centered userInfo-size">{props.userData.email}</div>
      <div className="flex flex-centered userInfo-size">{props.userData.password}</div>
      <div className="flex flex-centered userInfo-size">
        <div className="flex flex-spcarrnd adm-buttons_width">
          <button onClick={editUser} className = "adm-button adm-button_edit">Edit</button>
          <button onClick={deleteUser} className = "adm-button adm-button_delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  userData: PropTypes.object
};

const mapDispatchToProps = {
  showEdit,
  deleteUser
};

export default connect(null,mapDispatchToProps)(User);
