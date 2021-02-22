import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logo from "../Logo";

import {
  fetchMessage,
  deleteMessage,
  showEdit,
} from "../../actions/messageActions";
import { changeHeaderData } from "../../actions/headerActions";

import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Modal from "./Modal";
import Spinner from "../animatedElem/Spinner";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMessage();
  }

  toAdminPage = () => {
    this.props.history.push("adminpage");
  };

  render() {
    return (
      <>
        <Logo />
        <div className="pad-lr_chat">
          <Modal />
          <Header roomInfo={this.props.headerInform} />
          <div className="chat-messageWndw marg-t_20px">
            {this.props.messages.length !== 0 ? (
              <MessageList
                messages={this.props.messages}
                myId={this.props.myInform.id}
                deleteMessage={this.props.deleteMessage}
                clickToEdit={this.props.showEdit}
              />
            ) : (
              <Spinner />
            )}
          </div>
          <MessageInput addMessage={this.props.addMessage} />
          {this.props.myInform.isAdmin ? (
            <button
              onClick={this.toAdminPage}
              className="adm-button adm-button_chat"
            >
              {"Admin\nPage\n"} &#11014;
            </button>
          ) : null}
        </div>
      </>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  myInform: PropTypes.object,
  headerInform: PropTypes.object,
  addFetchedMessage: PropTypes.func,
  deleteMessages: PropTypes.func,
  showEdit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
    myInform: state.auth,
    headerInform: state.header,
  };
};
const mapDispatchToProps = {
  fetchMessage,
  deleteMessage,
  showEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
