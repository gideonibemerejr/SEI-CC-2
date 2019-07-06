import React from 'react';
import { Link } from 'react-router-dom';
const StarshipPage = props => {
  const starship = props.getStarship(props.match.params.idx);

  return (
    <div className="m-5 d-flex align-items-center justify-content-center">
      {starship ? (
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{starship.name}</h5>
              <p class="card-text">
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
              <Link to="/starships" class="btn btn-primary">
                Back to the Fleet
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default StarshipPage;
