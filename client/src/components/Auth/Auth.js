import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

function Auth(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (props.auth.hasOwnProperty("isAdmin")) {
      props.auth.isAdmin
        ? props.history.push("/adminpage")
        : props.history.push("/chat");
    }
  });

  const onLoginChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    props.login({ email, password });
  };

  return (
    <div
      autoComplete="off"
      className="flex flex-centered flex-drctCol full-window"
    >
      <div className="auth-size flex flex-centered flex-drctCol flex-spcarrnd">
        <h1>Log in</h1>
        <div className="flex flex-drctCol">
          <input onChange={onLoginChange} placeholder="Email" />
          <input
            onChange={onPasswordChange}
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="chat-msg_button auth-button_size" onClick={onSubmit}>Sign In</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
