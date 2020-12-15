import React, { useState } from 'react'

import Board from '../minesweeper/board/Board'
import Timer from './../components/Timer'
import { IoMdFlag } from 'react-icons/io'
import { BiSmile, BiSad } from 'react-icons/bi'
import { Wrapper, Menu } from './Minesweeper.css'

const Minesweeper = () => {
  const [isLose, setIsLose] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)
  const [flags, setFlags] = useState(99)

  const restart = () => {
    setIsLose(false)
    setFlags(99)
    setIsRefresh(true)

    setTimeout(() => {
      setIsRefresh(false)
    }, 10);
  }

  return (
    <Wrapper>
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
        />
      </Menu>
      {
        !isRefresh ?
          <Board
            width={30}
            height={16}
            mines={99}
            setFlags={setFlags}
            setIsLose={setIsLose}
            isLose={isLose}
          /> : null
      }
    </Wrapper>
  )
}

export default Minesweeper;