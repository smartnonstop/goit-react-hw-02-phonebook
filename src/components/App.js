import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default class App extends Component {

  state = {
    contacts: [],
    filter: ''
  };

  filterChange = e => {
    const { value } = e.target;
    this.setState({'filter': value});
  }

  addContact = (id, name, number) => {
    if (!this.isContactExists(name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id, name, number }],
      }));
    } else {
      alert(name+" is already in contacts");
    }
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    });
  }
  
  isContactExists = (name) => {
    return this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  render(){

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h2>Phone book</h2>
        <ContactForm submitForm={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterValue={this.state.filter} filterInput={this.filterChange}/>
        <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
      </>
    );
  }
}