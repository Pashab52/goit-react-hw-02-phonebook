import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = newContact => {
   
    
    this.setState(prevState => {
      newContact.id = nanoid();
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  onFilterChange=(event)=> {

  this.setState({
    filter: event.currentTarget.value
  });
  }


  filterContacts() {

    const normalizedFilter = this.state.filter.toLowerCase();
 return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  
  }

  deleteContact() {
    
    
  }



  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.onFormSubmit} contacts={this.state.contacts}
        />

        <Filter
          onFilterChange={this.onFilterChange}
          value={this.state.filter}
        />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <ContactList contacts={this.filterContacts()} />
        )}
      </div>
    );
  }
};
