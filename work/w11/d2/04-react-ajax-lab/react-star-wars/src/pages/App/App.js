import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import StarshipPage from '../StarshipPage/StarshipPage'
import './App.css'
import { getStarships } from '../../services/sw-api'

export default class App extends Component {
  state = {
    starships: []
  }

  async componentDidMount() {
    const starships = await getStarships()

    this.setState({ starships: starships.results })
    console.log(this.state.starships)
  }

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <main>
                {this.state.starships.map((starship, idx) => {
                  return (
                    <Link
                      to="/ships"
                      key={starship.name}
                      className="btn btn-default"
                    >
                      {starship.name}
                    </Link>
                  )
                })}
              </main>
            )}
          />
          <Route
            path="/ships/:index"
            render={props => <StarshipPage {...props} />}
          />
        </Switch>
      </>
    )
  }
}
