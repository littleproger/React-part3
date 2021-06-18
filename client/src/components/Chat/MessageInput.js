import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchMessage, addMessage, showEdit } from "../../actions/messageActions";
import { v4 as uuidv4 } from "uuid";

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: {
        id: "",
        userId:"",
        avatar:"",
        user:"",
        text: "",
        createdAt: ""
      },
      editedMsg: {
        id: "",
        text: "",
      },
    };
  }
  inputHandlerNew = (e) => {
    const myInform = this.props.myInform;
    const text = e.target.value.trim();
    const date = new Date();
    this.setState({
      msg: {
        text: text,
        createdAt: date.toString(),
        userId: myInform.id,
        avatar: myInform.avatar,
        user: `${myInform.name} ${myInform.surname}`
      },
    });
  };

  sendText = () => {
    if (this.state.msg.text) {
      this.props.addMessage(this.state.msg);
      setTimeout(()=>{this.props.fetchMessage()},10)
      this.state.msg.text = "";
    }
  };

  render() {
    return (
      <div>
        <div className="pad-lr_30px chat-msg_submit flex flex-vertCntr">
          <input
            className="chat-msg_input"
            type="text"
            name="message"
            placeholder="Message"
            value={this.state.msg.text}
            onChange={(e) => this.inputHandlerNew(e)}
          />
          <button className="chat-msg_button" onClick={this.sendText}>
            Send
          </button>
          <button className="chat-msg_button editButton_size" onClick={()=>this.props.showEdit()}>&#11014;</button>
        </div>
      </div>
    );
  }
}

MessageInput.propTypes = {
  myInform: PropTypes.object,
  messages: PropTypes.array,
  addMessage: PropTypes.func,
  showEdit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
    myInform: state.auth
  };
};
const mapDispatchToProps = {
  addMessage,
  showEdit,
  fetchMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
