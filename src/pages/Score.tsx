import React, { useEffect, useState } from 'react'

import { Wrapper } from './Score.css'
import { readData } from './../database/FirebaseHelper'
import Loading from './../components/Loading'
import TableTitle from './../score/TableTitle'
import SingleScore from './../score/SingleScore'

export interface Winner {
  name: string,
  time: number,
  width: number,
  height: number,
  mines: number,
  level: number
}

export interface Winners {
  winners: Winner[][]
}

const Score = () => {
  const [winners, setWinners] = useState<Winners>({ winners: [] })
  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
    if (winners.winners.length === 0) {
      readData().then((d) => {
        const data: Winner[] = d as Winner[];

        for (let i = 0; i < 3; i++) {

          const w: Winner[] = data.filter((value: any) => {
            return value.level === 2 - i;
          }).sort((a: Winner, b: Winner) => sortByTime(a, b))

          if (w.length > 0) {
            winners.winners.push(w);
          }
        }

        let wCustom: Winner[] = data.filter((value: Winner) => {
          return value.level === 3;
        }).sort((a: Winner, b: Winner) => sortCustom(a, b))

        while (wCustom.length > 0) {
          winners.winners.push(wCustom.filter((value: Winner) => {
            return value.height === wCustom[0].height && value.width === wCustom[0].width
              && value.mines === wCustom[0].mines
          }).sort((a: Winner, b: Winner) => sortByTime(a, b)))

          const arr = wCustom.filter((value: Winner) => {
            return !(value.height === wCustom[0].height && value.width === wCustom[0].width
              && value.mines === wCustom[0].mines)
          })

          wCustom.splice(0, wCustom.length);
          for (let i = 0; i < arr.length; i++) {
            wCustom.push(arr[i])
          }
        }

        setWinners({ winners: winners.winners })
        setIsEmpty(data.length === 0)
        setIsLoading(false)
      })
    }
}, [winners]);

return (
  <Wrapper>
    <Loading invisible={!isLoading} />
    <h1>Score</h1>
    {
      isEmpty &&
      <div>
        there are no any winners
        </div>
    }
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