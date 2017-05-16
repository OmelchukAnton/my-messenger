import React, { Component } from 'react';
import './ContactStyle.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }


  handleItemClick() {
    this.props.onClick(this.props.contact);
  }

  render() {
    return (
      <div className="content" onClick={this.handleItemClick}>
        <div className="contacts">
          <div className="ava">
            <img className="avatar" alt="avatar" src={this.props.avatar} />
          </div>
          <div>
            <div className="name" >{this.props.name}</div>
            <div className="message">{this.props.message}</div>
            <div className="time">{this.props.time}</div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: React.PropTypes.string,
  name: React.PropTypes.string,
  message: React.PropTypes.string,
  time: React.PropTypes.string,
  contact: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};
Contact.defaultProps = {
  avatar: '',
  name: '',
  message: '',
  time: '',
  contact: '',
};
