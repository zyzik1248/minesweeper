import React, { useState } from 'react'

import Board from '../minesweeper/board/Board'

const Minesweeper = () => {
  const [isLose, setIsLose] = useState(false)

  return (
    <div>
      <Board
        width={30}
        height={16}
        mines={10}
        setIsLose={setIsLose}
        isLose={isLose}
      />
    </div>
  )
}

export default Minesweeper;