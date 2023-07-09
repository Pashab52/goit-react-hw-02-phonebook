import { Component } from "react";
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    id: '',
  };

  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value, id: nanoid() });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state)
    this.reset()
  };

  reset = () => {
    this.setState({ name: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}