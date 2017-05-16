import React, { Component } from 'react';
import './Navigation.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch({ target }) {
    this.setState({
      search: target.value,
    });

    this.props.onSearchChange(target.value);
  }

  render() {
    return (
      <div className="Navigation-listOfUsers">
        <div className="navigation-leftSide">
          <div className="Messenger"> List of contacts </div>
        </div>
        <div className="navigation-rightSide">
          <input
            className="searchField"
            type="text"
            placeholder="Search for users"
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <div className="ddList"> ... </div>

        </div>
      </div>
    );
  }
}
Navigation.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
};
