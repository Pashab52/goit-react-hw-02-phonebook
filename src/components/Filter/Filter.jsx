import { Component } from 'react';


export class Filter extends Component{
    render() {
        return (
          <div>
            <label>
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