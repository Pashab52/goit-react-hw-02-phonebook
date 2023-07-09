import { Component } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';


export class ContactList extends Component {
  render() {
    console.log(this.props.contacts.length);
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return <ContactItem name={contact.name} />;
        })}
      </ul>
    );
  }
}
