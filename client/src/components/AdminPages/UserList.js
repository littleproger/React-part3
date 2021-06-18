import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUsers,showEdit } from "../../actions/adminActions";
import Users from "./Users";

function UserList(props) {

  useEffect(() => {
    setTimeout(()=>{props.fetchUsers()},100)
  },[]);

  const showModal = () =>{
    props.history.push('adminpage/modal');
    props.showEdit();
  }

  const toChat = () =>{
    props.history.push('chat');
  }

  if (props.auth) {
    if (props.auth.isAdmin) {
      return (
        <div className="pad-lr_chat pad-t_20px">
          <div className="flex userlist_title pad-l_4vw">
            <div className="flex flex-centered userInfo_title-size">
              Name and surname
            </div>
            <div className="flex flex-centered userInfo_title-size">
              Email
            </div>
            <div className="flex flex-centered userInfo_title-size">
              Password
            </div>
            <div className="flex flex-centered userInfo_title-size">
              <button onClick={showModal} className="adm-button adm-button_add">Add new user &#10133;</button>
            </div>
          </div>
          <Users history={props.history}/>
          <button onClick={toChat} className="adm-button adm-button_chat">Chat &#11014;</button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-centered flex-drctCol full-window">
          You are not an admin!
        </div>
      );
    }
  } else {
    return (
      <div className="flex flex-centered flex-drctCol full-window">
        You were not authenticated!
      </div>
    );
  }
}

UserList.propTypes = {
  auth: PropTypes.object,
  users: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    users: state.admin.users,
  };
};
const mapDispatchToProps = {
  fetchUsers,
  showEdit
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
