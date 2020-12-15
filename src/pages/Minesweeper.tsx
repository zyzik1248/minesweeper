import React, { useState } from 'react'

import Board from '../minesweeper/board/Board'
import Timer from './../components/Timer'
import { IoMdFlag } from 'react-icons/io'
import { BiSmile, BiSad } from 'react-icons/bi'
import { Wrapper, Menu } from './Minesweeper.css'

const Minesweeper = () => {
  const [isLose, setIsLose] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [winTime, setWinTime] = useState(0)
  const [isRefresh, setIsRefresh] = useState(false)
  const [flags, setFlags] = useState(10)

  const restart = () => {
    setIsLose(false)
    setFlags(10)
    setIsRefresh(true)
    setIsWin(false)

    setTimeout(() => {
      setIsRefresh(false)
    }, 10);
  }

  return (
    <Wrapper>
      {
        isWin && `win ${winTime}`
      }
      <Menu>
        <IoMdFlag />
        <span style={{ fontSize: 20, marginRight: 30 }}>
          {flags}
        </span>
        {
          isLose ?
            (<BiSad style={{ cursor: 'pointer' }} onClick={restart} />) :
            (<BiSmile style={{ cursor: 'pointer' }} onClick={restart} />)
        }
        <Timer
          isRefresh={isRefresh}
          isWin={isWin}
          setWinTime={setWinTime}
          isLose={isLose}
        />
      </Menu>
      {
        !isRefresh ?
          <Board
            width={30}
            height={16}
            mines={10}
            setFlags={setFlags}
            setIsLose={setIsLose}
            isLose={isLose}
            setIsWin={setIsWin}
            isWin={isWin}
          /> : null
      }
    </Wrapper>
  )
}

export default Minesweeper;