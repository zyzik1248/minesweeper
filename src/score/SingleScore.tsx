import React, { FunctionComponent } from 'react'
import { SingleWinner, Row, Index, ColumnHead } from './SingleScore.css'

export interface Score {
  name: string,
  time: number,
  id: number
}

const SingleScore: FunctionComponent<Score> = ({ name, time, id }) => {
  return (
    <SingleWinner>
      <Row>
        <Index>{id}</Index>
        <ColumnHead style={{width: '15%'}}>name:</ColumnHead>
        <div style={{width: '60%'}}>{name}</div>
        <ColumnHead style={{width: '15%'}}>time:</ColumnHead>
        <div style={{width: '10%'}}>{time}</div>
      </Row>
    </SingleWinner>
  )
}

export default SingleScore;