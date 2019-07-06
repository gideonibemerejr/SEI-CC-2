import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StarshipsPage extends Component {
  render() {
    return (
      <div className=" d-flex justify-content-center">
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
