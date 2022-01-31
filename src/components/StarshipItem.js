import React from 'react';
import { connect } from 'react-redux';
import { addStarshipToFleet } from '../actions';

import './StarshipItem.css';

class StarshipItem extends React.Component {
  addNewStarship() {
    this.props.addStarshipToFleet({
      name: this.props.starship.name,
      model: this.props.starship.model,
      crew: this.props.starship.crew,
      capacity: this.props.starship.passengers,
      totalPassengers: 0,
    });
  }
  render() {
    return (
      <div className="item-container">
        <div>{this.props.starship.name}</div>
        <div className="ui icon buttons">
          <button
            className="ui button blue"
            onClick={() => this.addNewStarship()}
          >
            <i className="plus icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { starshipsInFleet: state.starshipsInFleet };
};

export default connect(mapStateToProps, { addStarshipToFleet })(StarshipItem);
