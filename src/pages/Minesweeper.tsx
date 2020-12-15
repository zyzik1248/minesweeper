import React, { useState } from 'react'

import Board from '../minesweeper/board/Board'
import Timer from './../components/Timer'
import { IoMdFlag } from 'react-icons/io'
import { BiSmile, BiSad } from 'react-icons/bi'
import { Wrapper, Menu } from './Minesweeper.css'

const Minesweeper = () => {
  const [isLose, setIsLose] = useState(false)

  return (
    <Wrapper>
      <Menu>
        <IoMdFlag />
        <span style={{ fontSize: 20, marginRight: 30 }}>
          99
        </span>
        {
          isLose ?
            (<BiSad style={{ cursor: 'pointer' }} />) :
            (<BiSmile style={{ cursor: 'pointer' }} />)
        }
        <Timer />
      </Menu>
      <Board
        width={30}
        height={16}
        mines={10}
        setIsLose={setIsLose}
        isLose={isLose}
      />
    </Wrapper>
  )
}

export default Minesweeper;