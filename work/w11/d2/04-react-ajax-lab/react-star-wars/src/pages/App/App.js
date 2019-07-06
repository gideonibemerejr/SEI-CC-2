import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Link, Route } from 'react-router-dom';

import StarshipPage from '../StarshipPage/StarshipPage';
import StarshipsPage from '../StarshipsPage';
import Nav from '../../components/Nav';
import HomePage from '../Home';
import './App.css';
import { getStarships } from '../../services/sw-api';

export default class App extends Component {
  state = {
    starships: []
  };
  /*---------------------------
    # Methods
  ---------------------------*/
  getStarship = idx => {
    return this.state.starships[idx];
  };

  /*---------------------------
    # Lifecycle methods
  ---------------------------*/

  async componentDidMount() {
    // cache starships from request in variable of the same name
    const starships = await getStarships();
    // here the state is set to starships.results
    this.setState({ starships: starships.results });
    console.log('ships:', this.state.starships);
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/starships"
            render={() => <StarshipsPage starships={this.state.starships} />}
          />
          <Route
            path="/starships/:idx"
            render={props => (
              <StarshipPage {...props} getStarship={this.getStarship} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
