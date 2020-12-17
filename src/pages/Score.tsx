import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Wrapper } from './Score.css'
import SingleScore from './../score/SingleScore'

export interface Winner {
  name: string,
  time: number,
  width: number,
  height: number,
  mines: number,
  id: number,
  level: number
}

export interface Winners {
  winners: Winner[]
}

const Score = () => {
  const [winners, setWinners] = useState<Winners>({ winners: [] })

  useEffect(() => {
    async function getWinnerApi() {
      try {
        const resp = await axios.get('http://localhost:3002/winners')
        console.log(resp.data)
        setWinners({ winners: resp.data })
      } catch (err) {
        console.log(err)
      }
    }
    getWinnerApi()
  }, []);

  return (
    <Wrapper>
      <h1>Score</h1>
      {winners.winners.map((el, id) => (
        <SingleScore
          id={id + 1}
          name={el.name}
          time={el.time}
        />
      ))}
    </Wrapper>
  )
}

export default Score