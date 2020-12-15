import React from 'react'

import Board from '../minesweeper/board/Board'

const Minesweeper = () => {
  return (
    <div>
      <Board
        width={8}
        height={8}
        mines={10}
      />
    </div>
  )
}

export default Minesweeper;