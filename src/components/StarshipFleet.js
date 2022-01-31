import React from 'react';
import { connect } from 'react-redux';
import { fetchStarships } from '../actions';
import FleetList from './FleetList';

import './FleetList.css';

class StarshipFleet extends React.Component {
  componentDidMount() {
    this.props.fetchStarships();
  }
  render() {
    if (!this.props.starships || this.props.starships === 'undefined') {
      return null;
    }
    const renderedList = this.props.starships.map((starship) => {
      return (
        <div className="ui relaxed divided list" key={starship.model}>
          <FleetList starshipDetails={starship} />
        </div>
      );
    });
    return (
      <div className="fleet-class">
        <h1> Your Fleet </h1>
        {renderedList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { starships: state.starshipsInFleet };
};

export default connect(mapStateToProps, { fetchStarships })(StarshipFleet);
