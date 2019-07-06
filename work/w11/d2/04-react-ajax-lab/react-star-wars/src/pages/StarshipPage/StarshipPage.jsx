import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PilotList from '../../components/PilotList';

class StarshipPage extends Component {
  render() {
    const starship = this.props.getStarship(this.props.match.params.idx);
    return (
      <div className="m-5 d-flex flex-column align-items-center justify-content-center">
        {starship ? (
          <>
            <h3 className="card-title">{starship.name}</h3>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <strong>Model: </strong>
                    {starship.model}
                  </p>
                  <p className="card-text">
                    <strong>Make: </strong>
                    {starship.manufacturer}
                  </p>
                  <p className="card-text">
                    <strong>Cost: </strong>
                    &#8372;{starship.cost_in_credits}
                  </p>
                  <PilotList pilots={starship.pilots} />
                  <Link to="/starships" className=" mt-2 btn btn-primary">
                    Back to the Fleet
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default StarshipPage;
