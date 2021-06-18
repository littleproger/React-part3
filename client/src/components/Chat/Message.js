import React from "react";
import PropTypes from 'prop-types';
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

function Message(props) {
  let [hour, minute] = "";
  let newMsg = true;
  console.log(new Date(props.data.updatedAt).getTime() - new Date(props.data.createdAt).getTime())
  if (new Date(props.data.updatedAt).getTime() - new Date(props.data.createdAt).getTime() > 2000 ) {
    [hour, minute] = new Date(props.data.updatedAt)
      .toLocaleTimeString()
      .split(":");
    newMsg = false;
  } else {
    [hour, minute] = new Date(props.data.createdAt)
      .toLocaleTimeString()
      .split(":");
  }

  return (
    <div>
      {String(props.data.userId) === String(props.myId) ? (
        <MyMessage
          clickToEdit={props.clickToEdit}
          deleteMessage={props.deleteMessage}
          time={{ hour, minute }}
          newMsg={newMsg}
          data={props.data}
        />
      ) : (
        <OtherMessage
          time={{ hour, minute }}
          newMsg={newMsg}
          data={props.data}
        />
      )}
    </div>
  );
}

Message.propTypes = {
  myId: PropTypes.string,
  data: PropTypes.object,
  clickToEdit: PropTypes.func,
  deleteMessage: PropTypes.func
};

export default Message;
