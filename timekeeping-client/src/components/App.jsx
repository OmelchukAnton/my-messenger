import React, { Component } from 'react';

import ContactList from './contacts/ContactList.jsx';
import Navigation from './navigation/Navigation.jsx';
import ChatWindow from './chatPage/ChatWindow.jsx';
import getContacts from '../services/contacts.js';
// import Messanges from './chatPage/Messanges.jsx';


import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.onAddNewItem = this.onAddNewItem.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  componentDidMount() {
    getContacts().then((data) => {
      this.setState({
        contacts: data,
        filtered: data,
      });
    });
  }

  onAddNewItem(name) {
    getContacts().then((prevState) => {
      this.setState({
        filtered: [...prevState.filtered, { name }],
        contacts: [...prevState.contacts, { name }],
      });
    });
  }

  onItemClick(contact) {
    this.setState({
      contactItem: contact,
    });
  }

  handleSearch(value) {
    const { contacts } = this.state;
    const filtered = contacts.filter(
    contact => contact.name.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );

    this.setState({
      filtered,
    });
  }

  render() {
    return (
      <main>
        <div className="content">
          <section className="listUser">
            <Navigation
              onSearchChange={this.handleSearch}
            />
            <ContactList
              contacts={this.state.filtered}
              onAddChange={this.onAddNewItem}
              onItemClick={this.onItemClick}
            />
          </section>
          <section>
            <ChatWindow
              contact={this.state.contactItem}
            />
            {this.props.children}
          </section>
        </div>
      </main>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
