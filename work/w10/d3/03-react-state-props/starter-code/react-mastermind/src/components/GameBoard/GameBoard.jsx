import React from 'react'
import GuessRow from '../GuessRow/GuessRow'

const GameBoard = props => (
  <div>
    {props.guesses.map((guess, idx) => (
    <GuessRow guess={guess} colors={props.colors} key={idx} rowIdx={idx} currentGuess={idx === (props.guesses.length - 1)}/>
    ))}
  </div>
)

export default GameBoard
