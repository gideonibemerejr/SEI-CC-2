import React from 'react'
import { Link } from 'react-router-dom'
import './SettingsPage.css'

const SettingsPage = props => {
  const activeStyle = {
    border: '2px solid #333'
  }
  const handleDifficultyChange = level => {
    props.handleDifficultyChange(level)
    props.handleNewGameClick()
    props.history.push('/')
  }
  const keys = Object.keys(props.colorsList)

  const levels = keys.map(level => (
    <div key={level} className="Settings-row">
      <button
        className="btn btn-default"
        style={level === props.difficulty ? activeStyle : null}
        disable={level === props.difficulty}
        onClick={() => handleDifficultyChange(level)}
      >
        {level}
      </button>
      <div className="Settings-colors">
        {props.colorsList[level].map(color => (
          <div
            className="Settings-color"
            style={{ backgroundColor: color }}
            key={color}
          />
        ))}
      </div>
    </div>
  ))
  return (
    <div className="Settings">
      <header className="header-footer">Set Difficulty Level</header>
      <div>{levels}</div>
      <div>
        <Link className=" Settings-cancel btn btn-default btn-sm" to="/">
          Cancel
        </Link>
      </div>
    </div>
  )
}

export default SettingsPage
