import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css' 
  
export class Filter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={css.filter}>
        <label>
          Find contacts by name <br />
          <input
            type="text"
            name="name"
            value={this.props.value}
            onChange={this.props.onFilterChange}
          />
        </label>
        {/* <button type="submit">sdfsf</button> */}
      </div>
    );
  }
}