import React, { FunctionComponent } from 'react'
import { Levels } from './../reducers/gameParameters/types'
import { TableTitleStyled, Hr } from './SingleScore.css'

export interface Score {
  level: number,
  width: number,
  height: number,
  mines: number
}

const TableTitle: FunctionComponent<Score> = ({ level, width, height, mines }) => {
  return (
    <TableTitleStyled>
      {Levels[level]} minefield: {width} x {height} , {mines} mines
      <Hr/>
    </TableTitleStyled>
  )
}

export default TableTitle