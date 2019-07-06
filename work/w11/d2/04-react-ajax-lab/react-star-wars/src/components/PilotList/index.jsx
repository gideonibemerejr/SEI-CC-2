import React, { Component } from 'react';

import { getPilots } from '../../services/sw-api';

class PilotList extends Component {
  state = {
    pilots: []
  };

  async componentDidMount() {
    // cache starships from request in variable of the same name
    const pilots = await getPilots(this.props.pilots);
    // here the state is set to starships.results
    this.setState({ pilots });
    console.log('pilots:', this.state.pilots);
  }

  render() {
    return (
      <div>
        {this.state.pilots.length ? (
          <>
            <h5 className="mt-5 card-title">Pilots of this Ship</h5>
            {this.state.pilots.map((pilot, idx) => (
              <div key={idx}>
                <h6 className="mt-3">#{idx + 1}</h6>
                <p className="card-text">
                  <strong>Name: </strong>
                  {pilot.name}
                </p>
                <p className="card-text">
                  <strong>Height: </strong>
                  {pilot.height}cm
                </p>
                <p className="card-text">
                  <strong>Mass: </strong>
                  {pilot.mass}kg
                </p>
              </div>
            ))}
          </>
        ) : (
          <h5 className="card-title">No pilots...yet</h5>
        )}
      </div>
    );
  }
}

export default PilotList;
