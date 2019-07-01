import React from 'react'
import GuessPeg from '../GuessPeg/GuessPeg'
import './GuessPegs.css'

const GuessPegs = props => (
  <div className="GuessPegs">
    <GuessPeg
      currentGuess={props.currentGuess}
      currentcolor={props.colors[props.code[0]]}
    />
    <GuessPeg
      currentGuess={props.currentGuess}
      color={props.colors[props.code[1]]}
    />
    <GuessPeg
      currentGuess={props.currentGuess}
      color={props.colors[props.code[2]]}
    />
    <GuessPeg
      currentGuess={props.currentGuess}
      color={props.colors[props.code[3]]}
    />
  </div>
)

export default GuessPegs
