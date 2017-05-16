import React from 'react';
import './Chats.scss';

const ChatWindow = (props) => {
  if (!props.contact) {
    return <div className="selectChat"> Feed </div>;
  }
  return (
    <div className="selectChat">
      <button className="back"> Back </button>
      <div className="tick-user"> Send a message {props.contact.name} </div>
    </div>
  );
};

export default ChatWindow;

ChatWindow.propTypes = {
  name: React.PropTypes.string,
  contact: React.PropTypes.string,
};
ChatWindow.defaultProps = {
  name: '',
  contact: '',
};
