import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FleetList.css';

const FleetList = (props) => {
  const [color, setColor] = useState('');

  const progress =
    (props.starshipDetails.totalPassengers / props.starshipDetails.capacity) *
    100;

  useEffect(() => {
    if (progress >= 80) {
      setColor('error');
    } else if (progress >= 50) {
      setColor('warning');
    } else {
      setColor('success');
    }
  }, [progress]);

  return (
    <div>
      <Link
        to={{
          pathname: `/details/`,
          state: {
            name: props.starshipDetails.name,
            capacity: props.starshipDetails.capacity,
            totalPassengers: props.starshipDetails.totalPassengers
              ? props.starshipDetails.totalPassengers
              : 0,
          },
        }}
      >
        <div className="">
          <div className="content">
            <div className="header">{props.starshipDetails.name}</div>
            <div className="description">
              {props.starshipDetails.model} <br />
              Max-Passengers: {props.starshipDetails.capacity}
            </div>
            <div
              className={`ui bottom attached large progress total-passengers ${color}`}
            >
              <div
                className="bar"
                style={{
                  width:
                    (props.starshipDetails.totalPassengers >= 0
                      ? props.starshipDetails.totalPassengers /
                        props.starshipDetails.capacity
                      : 0) *
                      100 +
                    '%',
                }}
              ></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FleetList;
