import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { changeHeaderData } from "../../actions/headerActions";
import React from "react";
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';
import Time from './Time';

function MessageList(props) {
  let timeNow = new Date();
  let prevDate = "";
  let time;

  props.changeHeaderData(props.messages);
  return (
    <div className="full-size flex-drctCol">
      {
        props.messages.map((data) => {
          if(timeNow !== new Date(data.createdAt).toLocaleDateString()){
            time = <Time data={data} prevDate={prevDate} cls={"date-block"} key={uuidv4()}/>
            prevDate = new Date(data.createdAt).toLocaleDateString();
          }
            return (
            <>
                {time}
                <Message
                    data={data}
                    myId={props.myId}
                    deleteMessage={props.deleteMessage}
                    clickToEdit={props.clickToEdit}
                    key={data.id}
                />
            </>
            );
        })
      }
    </div>
  );
}

MessageList.propTypes = {
  myId: PropTypes.string,
  messages: PropTypes.array,
  clickToEdit: PropTypes.func,
  changeHeaderData: PropTypes.func,
  deleteMessage: PropTypes.func
};

const mapDispatchToProps = {
  changeHeaderData,
};

export default connect(null, mapDispatchToProps)(MessageList);
