import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [
    ],
    filter: '',
    name: '',
    number: '',
  };

  onFormSubmit = newContact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

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
        <ContactForm onFormSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        {/* {this.state.contacts.length > 0 && <ContactList contacts={this.state.contacts } />} */}
      </div>
    );
  }
};
