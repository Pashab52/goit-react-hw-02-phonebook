import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'



export class ContactItem extends Component {
  static propTypes = {
    OnBtnDelClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className={css.contactItem}>
        <p>
          {this.props.name}: {this.props.number}
        </p>
        <button
          type="button"
          onClick={() => this.props.OnBtnDelClick(this.props.id)}
        >
          X
        </button>
      </li>
    );
  }
}
