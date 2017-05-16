import React from 'react';
import './Chats.scss';

export default function Messanges(props) {
  // console.log(props);

  return (
    <div className="message-content">
      <div className="topPart">
        <div className="firstUser">
          Me
        </div>
        <div className="dialog">
          dialog
        </div>
        <div className="secondUser">
          {props.match.params.userId}
        </div>
      </div>
      <div className="bottomPart">
        <input
          className="inputMessage"
          type="text"
          placeholder="Write a message..."
        />
        <button className="sendMessage"> send </button>
      </div>
    </div>
  );
}
Messanges.propTypes = {
  match: React.PropTypes.func.isRequired,
};
