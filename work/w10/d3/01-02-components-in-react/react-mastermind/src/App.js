import React, { Component } from 'react'

import './App.css'
import './components/GameBoard/GameBoard'
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
      </div>
    )
  }
}
