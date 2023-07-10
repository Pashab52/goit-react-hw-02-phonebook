import { Component } from 'react';





export class ContactItem extends Component {
  handleOnBtnClick = event => {
    console.log(event.currentTarget.id);
    console.dir(event.currentTarget.id);
  };

  render() {
    return (
      <li>
        <p>
          {this.props.name}: {this.props.number}
        </p>
        <button id={ this.props.id} type="button" onClick={this.handleOnBtnClick}>
          Delete
        </button>
      </li>
    );
  }
}
