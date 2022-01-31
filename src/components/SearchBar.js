import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStarships } from '../actions';
import './App.css';

class SearchBar extends React.Component {
  state = {
    term: '',
  };
  starships = [];
  renderedList;

  componentDidUpdate(prevProps, prevState) {
    if (prevState.term !== this.state.term) {
      this.props.onFormSubmit(this.state.term);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="ui segment search-bar ten wide column">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Starship Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToPropos = (state) => {
  return { starships: state.starships };
};

export default connect(mapStateToPropos, { fetchStarships })(SearchBar);
