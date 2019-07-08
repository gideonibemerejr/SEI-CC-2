import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HighScoresPage.module.css';
import { index, formatTime } from '../../services/services';

export default class HighScoresPage extends Component {
  async componentDidMount() {
    const scores = await index();
    this.props.handleUpdateScores(scores);
  }

  render() {
    const scoreRows = this.props.scores.map((score, idx) => (
      <tr key={idx}>
        <td>
          <span className="badge">{idx + 1}</span>
        </td>
        <td>{score.initials}</td>
        <td>{score.numGuesses}</td>
        <td>{formatTime(score.seconds)}</td>
      </tr>
    ));
    return (
      <div>
        <header className="header-footer">High Scores</header>
        {this.props.scores.length ? (
          <table className={`${styles.table} table text-info`}>
            <thead>
              <tr>
                <th width={80}>#</th>
                <th width={100}>Initials</th>
                <th width={100}>Guesses</th>
                <th>Seconds</th>
              </tr>
            </thead>
            <tbody>{scoreRows}</tbody>
          </table>
        ) : (
          <h4 className="text-info">No High Scores Yet</h4>
        )}
        <div>
          <Link to="/" className={`${styles.cancel} btn btn-default btn-sm`}>
            Back to Game
          </Link>
        </div>
      </div>
    );
  }
}
