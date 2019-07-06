import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StarshipsPage extends Component {
  render() {
    return (
      <div
        className=" d-flex flex-column justify-content-center align-items-center
      "
      >
        <h2 className="m-5">Welcome to the First 10 Fleet Hangar</h2>

        <div>
          {this.props.starships ? (
            this.props.starships.map((starship, idx) => (
              <Link
                className="btn btn-secondary m-2"
                to={`/starships/${idx}`}
                key={idx}
              >
                {starship.name}{' '}
                <span
                  className={
                    starship.pilots.length
                      ? 'badge badge-primary'
                      : 'badge badge-warning'
                  }
                >
                  {starship.pilots.length}
                </span>
              </Link>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    );
  }
}

export default StarshipsPage;
