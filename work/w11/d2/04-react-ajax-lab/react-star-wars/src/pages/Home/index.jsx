import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">Welcome to the Starship Hangar</h1>
        <p class="lead">
          What is this? The Star Wars API is the world's first quantified and
          programmatically-formatted set of Star Wars data. There are 87 people,
          61 planets, 7 films, 37 species, 39 vehicles, and 37 total starships.
        </p>
        <hr class="my-4" />
        <p>In this hangar we are only authorize to tour 10 of the 37 ships.</p>
        <Link class="btn btn-primary btn-lg" to="/starships" role="button">
          Enter Hangar
        </Link>
      </div>
    </>
  );
};

export default Home;
