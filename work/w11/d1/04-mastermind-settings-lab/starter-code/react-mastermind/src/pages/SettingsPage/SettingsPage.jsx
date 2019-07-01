import React from 'react'
import { Link } from 'react-router-dom'

const SettingsPage = props => {
  const keys = Object.keys(props.colorsList)

  const levels = keys.map(level => (
    <div key={level} className="settings-row">
      <button className="btn btn-default">{level}</button>
    </div>
  ))
  return (
    <div>
      <Link to="/">HOME</Link>
      <h1>Settings Page</h1>
      <div>{levels}</div>
    </div>
  )
}

export default SettingsPage
