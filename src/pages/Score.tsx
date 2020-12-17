import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Wrapper } from './Score.css'
import SingleScore from './../score/SingleScore'
import TableTitle from './../score/TableTitle'

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
  winners: Winner[][]
}

const Score = () => {
  const [winners, setWinners] = useState<Winners>({ winners: [] })

  const sortByTime = (a: Winner, b: Winner): number => {
    return a.time - b.time
  }

  const sortCustom = (a: Winner, b: Winner): number => {
    if (a.width < b.width || a.height < b.height || a.mines < b.mines) {
      return 1;
    }
    if (a.width > b.width || a.height > b.height || a.mines > b.mines) {
      return -1;
    }

    return 0;
  }

  useEffect(() => {
    async function getWinnerApi() {
      try {
        const resp = await axios.get('http://localhost:3002/winners')

        for (let i = 0; i < 3; i++) {

          const w: Winner[] = resp.data.filter((value: any) => {
            return value.level === 2 - i;
          }).sort((a: Winner, b: Winner) => sortByTime(a, b))

          if (w.length > 0) {
            winners.winners.push(w);
          }
        }

        let wCustom: Winner[] = resp.data.filter((value: Winner) => {
          return value.level === 3;
        }).sort((a: Winner, b: Winner) => sortCustom(a, b))

        while (wCustom.length > 0) {
          winners.winners.push(wCustom.filter((value: Winner) => {
            return value.height === wCustom[0].height && value.width === wCustom[0].width
              && value.mines === wCustom[0].mines
          }).sort((a: Winner, b: Winner) => sortByTime(a, b)))

          wCustom = wCustom.filter((value: Winner) => {
            return !(value.height === wCustom[0].height && value.width === wCustom[0].width
              && value.mines === wCustom[0].mines)
          })
        }

        setWinners({ winners: winners.winners.slice() })
      } catch (err) {
        console.log(err)
      }
    }
    getWinnerApi()
  }, []);

  return (
    <Wrapper>
      <h1>Score</h1>
      {winners.winners.map((row) => (
        <>
          <TableTitle
            level={row[0].level}
            width={row[0].width}
            height={row[0].height}
            mines={row[0].mines}
          />
          {row.map((el, index2) => (
            <SingleScore
              id={index2 + 1}
              name={el.name}
              time={el.time}
            />
          ))}
        </>
      ))}
    </Wrapper>
  )
}

export default Score