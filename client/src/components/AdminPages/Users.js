import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import User from "./User";
import Spinner from "../animatedElem/Spinner";

function Users(props) {
  return (
    <div>
      {props.users.length !== 0 ? (
        props.users.map((user) => {
          return <User history={props.history} userData={user} key={user.id} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

export default connect(mapStateToProps, null)(Users);
