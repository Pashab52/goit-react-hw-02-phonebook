import { Component } from 'react';

export class ContactItem extends Component {
  render() {
  
    return (
      <li>
        <p>
          {this.props.name}: {this.props.number}
        </p>
      </li>
    );
  }
}
