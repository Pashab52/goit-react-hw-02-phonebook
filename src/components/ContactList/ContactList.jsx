import { Component } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';


export class ContactList extends Component {
  render() {
  
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return (
            <ContactItem
              name={contact.name}
              number={contact.number}
              key={contact.id}
            />
          );
        })}
      </ul>
    );
  }
}
