import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStarships, updateStarship } from '../actions';

import './FleetStarshipDetails.css';

class FleetStarshipDetails extends React.Component {
  state = { progressCount: 0, color: 'success' };

  componentDidMount() {
    this.props.fetchStarships();

    if (!isNaN(this.props.location.state.totalPassengers)) {
      this.setState({
        progressCount:
          (this.props.location.state.totalPassengers /
            this.props.location.state.capacity) *
          100,
      });
    } else {
      this.setState({ progressCount: 0 });
    }
  }

  setColorForProgress = () => {
    if (this.state.progressCount >= 80) {
      this.setState({ color: 'error' });
    } else if (this.state.progressCount >= 50) {
      this.setState({ color: 'warning' });
    } else {
      this.setState({ color: 'success' });
    }
  };

  addPassengers = () => {
    if (this.state.progressCount < 100) {
      this.setState({ progressCount: this.state.progressCount + 10 });
    }
    this.setColorForProgress();
  };

  removePassengers = () => {
    if (this.state.progressCount > 0) {
      this.setState({ progressCount: this.state.progressCount - 10 });
    }
    this.setColorForProgress();
  };

  render() {
    const capacity = this.props.location.state.capacity;
    if (capacity === 'n/a' || capacity === 0) {
      this.rendered = (
        <div> Sorry, you can't add any passengers to this starship! </div>
      );
    } else {
      this.rendered = (
        <div>
          <div className={`ui progress progress-bar ${this.state.color}`}>
            <div
              className="bar"
              style={{ width: this.state.progressCount + '%' }}
            >
              <div className="progress">
                {this.props.location.state.capacity *
                  `0.${this.state.progressCount}`}
              </div>
            </div>
            <div className="label">Starship Capacity</div>
          </div>
          <div className="button-group">
            <div className="ui buttons">
              <div
                className="increment ui basic green button icon"
                onClick={this.addPassengers}
              >
                <i className="plus icon"></i>
              </div>

              <div
                className="increment ui basic red button icon"
                onClick={this.removePassengers}
              >
                <i className="minus icon"></i>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="ui raised segment details-segment">
          <h1>Edit passengers in starship: {this.props.location.state.name}</h1>
          <div className="progress-div">{this.rendered}</div>
          <div
            className="save-button"
            onClick={() => {
              this.props.updateStarship(
                this.props.location.state.name,
                this.state.progressCount,
                this.props.location.state.capacity
              );
            }}
          >
            <Link to="/">
              <button className="ui primary button">Done</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { starships: state.starships };
};

export default connect(mapStateToProps, { fetchStarships, updateStarship })(
  FleetStarshipDetails
);
